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
import getSmallestValue from "./getSmallestValue";

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

interface InitialPosition {
  top?: StyleInfo["top"];
  left?: StyleInfo["left"];
}

type DragControllerHost = HTMLElement & ReactiveControllerHost;

interface DragControllerOptions {
  initialPosition: InitialPosition;
}

const defaultOptions = {
  initialPosition: {},
};

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
    touchAction: "none",
    top: "0px",
    left: "0px",
  };

  constructor(
    host: DragControllerHost,
    options: DragControllerOptions = defaultOptions
  ) {
    this.host = host;
    this.host.addController(this);

    const { initialPosition = {} } = options;

    this.styles = {
      ...this.styles,
      ...initialPosition,
    };
  }

  hostDisconnected(): void {
    if (this.pointerTracker) {
      this.pointerTracker.stop();
    }
  }

  applyDrag() {
    if (!this.host.draggable) return null;

    return dragDirective(this, {
      start: this.#onDragStart,
      move: this.#onDrag,
      end: this.#onDragEnd,
    });
  }

  updateElPosition(x: string, y: string) {
    this.styles = {
      ...this.styles,
      left: x,
      top: y,
    };
  }

  handleWindowMove(pointer: Pointer) {
    const el = this.draggableElement;

    if (!el) return;
    const { top, left } = this.styles;
    const parsedTop = Number(top?.replace("px", ""));
    const parsedLeft = Number(left?.replace("px", ""));
    const pageX = Math.floor(pointer.pageX);
    const pageY = Math.floor(pointer.pageY);

    // This is because 'onDrag' fires onmouseup and sets the cursor position to 0 0. if this happens it causes bad things
    if (pageX !== 0 && pageY !== 0) {
      // prevents computation if value hasn't changed
      if (pageX !== this.cursorPositionX || pageY !== this.cursorPositionY) {
        const { bottom, right, width, height } = el.getBoundingClientRect();

        // window.inner* and screen.avail* had problems depending on where they're used
        // doing this check ensures that the draggable box never extends beyond the screen
        const availableWidth = getSmallestValue(screen.availWidth, innerWidth);
        const availableHeight = getSmallestValue(
          screen.availHeight,
          innerHeight
        );

        const xDelta = pageX - this.cursorPositionX!;
        const yDelta = pageY - this.cursorPositionY!;
        const outOfBoundsTop = parsedTop + yDelta < 0;
        const outOfBoundsLeft = parsedLeft + xDelta < 0;
        const outOfBoundsBottom = bottom + yDelta > availableHeight;
        const outOfBoundsRight = right + xDelta > availableWidth;
        const isOutOfBounds =
          outOfBoundsBottom ||
          outOfBoundsLeft ||
          outOfBoundsRight ||
          outOfBoundsTop;

        this.cursorPositionX = pageX;
        this.cursorPositionY = pageY;

        if (!isOutOfBounds) {
          const top = `${parsedTop + yDelta}px`;
          const left = `${parsedLeft + xDelta}px`;

          this.updateElPosition(left, top);
        } else {
          if (outOfBoundsTop) {
            const left = `${parsedLeft + xDelta}px`;

            this.updateElPosition(left, "0px");
          }
          if (outOfBoundsLeft) {
            const top = `${parsedTop + yDelta}px`;

            this.updateElPosition("0px", top);
          }
          if (outOfBoundsBottom) {
            const top = `${availableHeight - height}px`;
            const left = `${parsedLeft + xDelta}px`;

            this.updateElPosition(left, top);
          }
          if (outOfBoundsRight) {
            const top = `${parsedTop + yDelta}px`;
            // Adding this "2" because otherwise the window locks up on the right
            // I don't know why it does this and i'm sure there's a logical mathematical reason for it
            const left = `${Math.floor(availableWidth - width - 2)}px`;

            this.updateElPosition(left, top);
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

    return true;
  };

  #onDrag = (_previousPointers: Pointer[], pointers: Pointer[]) => {
    const [pointer] = pointers;
    const event = new CustomEvent("window-drag", {
      bubbles: true,
      composed: true,
      detail: {
        pointer,
      },
    });

    window.requestAnimationFrame(() => {
      this.host.dispatchEvent(event);
      return this.handleWindowMove(pointer);
    });
  };

  #onDragEnd = (_pointer: Pointer, ev: PtInputEvent) => {
    const el = ev.target! as HTMLDivElement;
    el.removeAttribute("data-state");
  };
}
