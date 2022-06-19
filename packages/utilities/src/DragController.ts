import {
  ElementPart,
  noChange,
  ReactiveController,
  ReactiveControllerHost,
} from "lit";
import { Directive, directive, PartInfo, PartType } from "lit/directive.js";
import PointerTracker, {
  Pointer,
  InputEvent as PtInputEvent,
} from "pointer-tracker";
import { StyleInfo } from "lit/directives/style-map.js";

type StartCallback = (pointer: Pointer, event: PtInputEvent) => boolean;

type MoveCallback = (
  previousPointers: Pointer[],
  changedPointers: Pointer[],
  event?: PtInputEvent
) => void;

type EndCallback = (
  pointer: Pointer,
  event: PtInputEvent,
  cancelled: boolean
) => void;

interface PointerTrackerOptions {
  start: StartCallback;
  move: MoveCallback;
  end: EndCallback;
}

type DragControllerHost = HTMLElement & ReactiveControllerHost;

class DragDirective extends Directive {
  hasInitialised = false;

  constructor(partInfo: PartInfo) {
    super(partInfo);

    if (partInfo.type !== PartType.ELEMENT) {
      throw new Error("The `drag` directive must be used on an element");
    }
  }

  update(
    part: ElementPart,
    renderArgs: [DragController, PointerTrackerOptions]
  ) {
    if (this.hasInitialised) return;

    const draggableElement = part.element as HTMLElement;
    const [dragController, pointerTrackerOptions] = renderArgs;

    draggableElement.setAttribute("data-dragging", "idle");
    dragController.draggableElement = draggableElement;

    dragController.pointerTracker = new PointerTracker(draggableElement, {
      start(...args) {
        pointerTrackerOptions.start(...args);
        draggableElement.setAttribute("data-dragging", "dragging");
        return true;
      },
      move(...args) {
        pointerTrackerOptions.move(...args);
        console.log("sopsospo");
      },
      end(...args) {
        pointerTrackerOptions.end(...args);
        draggableElement.setAttribute("data-dragging", "idle");
      },
    });

    this.hasInitialised = true;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render(_host: DragController, _pointerTrackerOptions: PointerTrackerOptions) {
    return noChange;
  }
}

const dragDirective = directive(DragDirective);

export class DragController implements ReactiveController {
  private host: DragControllerHost;

  cursorPositionX: number | null = null;
  cursorPositionY: number | null = null;
  pointerTracker: PointerTracker | null = null;
  draggableElement: HTMLElement | null = null;

  styles: StyleInfo = {
    top: "16px",
    left: "16px",
  };

  constructor(host: DragControllerHost) {
    this.host = host;
    this.host.addController(this);
  }

  hostDisconnected(): void {
    if (this.pointerTracker) {
      this.pointerTracker.stop();
    }
  }

  draggable() {
    return dragDirective(this, {
      start: this.#onDragStart,
      move: this.#onDrag,
      end: this.#onDragEnd,
    });
  }

  handleWindowMove(pointer: Pointer) {
    const { top, left } = this.styles;
    const { innerHeight, innerWidth } = window;
    const el = this.draggableElement;

    if (!el) return;
    const parsedTop = Number(top?.replace("px", ""));
    const parsedLeft = Number(left?.replace("px", ""));
    const pageX = Math.floor(pointer.pageX);
    const pageY = Math.floor(pointer.pageY);

    // This is because 'onDrag' fires onmouseup and sets the cursor position to 0 0. if this happens it causes bad things
    if (pageX !== 0 && pageY !== 0) {
      // prevents computation if value hasn't changed
      if (pageX !== this.cursorPositionX || pageY !== this.cursorPositionY) {
        const { bottom, right, width, height } = el.getBoundingClientRect();

        const xDelta = pageX - this.cursorPositionX!;
        const yDelta = pageY - this.cursorPositionY!;
        const outOfBoundsTop = parsedTop + yDelta < 0;
        const outOfBoundsLeft = parsedLeft + xDelta < 0;
        const outOfBoundsBottom = bottom + yDelta > innerHeight;
        const outOfBoundsRight = right + xDelta > innerWidth;
        const isOutOfBounds =
          outOfBoundsBottom ||
          outOfBoundsLeft ||
          outOfBoundsRight ||
          outOfBoundsTop;

        this.cursorPositionX = pageX;
        this.cursorPositionY = pageY;

        if (!isOutOfBounds) {
          this.styles = {
            top: `${parsedTop + yDelta}px`,
            left: `${parsedLeft + xDelta}px`,
          };
        } else {
          if (outOfBoundsTop) {
            this.styles = {
              top: `0px`,
              left: `${parsedLeft}px`,
            };
          }
          if (outOfBoundsLeft) {
            this.styles = {
              top: `${parsedTop}px`,
              left: `${0}px`,
            };
          }
          if (outOfBoundsBottom) {
            this.styles = {
              top: `${innerHeight - height}px`,
              left: `${parsedLeft}px`,
            };
          }
          if (outOfBoundsRight) {
            this.styles = {
              top: `${parsedTop}px`,
              left: `${innerWidth - width}px`,
            };
          }
        }

        this.host.requestUpdate();
      }
    }
  }

  #onDragStart = (pointer: Pointer, ev: PtInputEvent) => {
    this.cursorPositionX = Math.floor(pointer.pageX);
    this.cursorPositionY = Math.floor(pointer.pageY);

    const el = ev.target! as HTMLDivElement;
    el.setAttribute("data-state", "dragging");

    document.documentElement.setAttribute("data-state", "dragging");

    return true;
  };

  #onDrag = (_previousPointers: Pointer[], pointers: Pointer[]) => {
    const [pointer] = pointers;

    window.requestAnimationFrame(() => this.handleWindowMove(pointer));
  };

  #onDragEnd = (_pointer: Pointer, ev: PtInputEvent) => {
    const el = ev.target! as HTMLDivElement;
    el.removeAttribute("data-state");

    document.documentElement.removeAttribute("data-state");
  };
}
