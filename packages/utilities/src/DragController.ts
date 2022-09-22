import { ReactiveController, ReactiveControllerHost } from "lit";
import PointerTracker, {
  Pointer,
  InputEvent as PtInputEvent,
} from "pointer-tracker";
import { StyleInfo } from "lit/directives/style-map.js";

interface InitialPosition {
  x?: number;
  y?: number;
}

type DragControllerHost = HTMLElement & ReactiveControllerHost;

type GetElFn = () => Element | null;
type AsyncGetElFn = () => Promise<Element | null>;

interface DragControllerOptions {
  initialPosition: InitialPosition;
  containerId?: string;
  getContainerEl: GetElFn;
  getDraggableEl: AsyncGetElFn;
}

type State = "dragging" | "idle";

const defaultOptions = {
  initialPosition: {},
  getContainerEl: () => null,
  getDraggableEl: () => Promise.resolve(null),
};

export class DragController implements ReactiveController {
  private host: DragControllerHost;

  x;
  y;

  cursorPositionX = 0;
  cursorPositionY = 0;

  getContainerEl: GetElFn;
  draggableEl: HTMLElement = null!;

  state: State = "idle";

  pointerTracker: PointerTracker | null = null;

  containerId = "";

  styles: StyleInfo = {
    position: "absolute",
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

    this.getContainerEl = options.getContainerEl;
    options.getDraggableEl().then((el) => {
      if (!el) {
        console.warn("getDraggableEl() did not return an element HTMLElement");
        return;
      }

      // TODO Add typeguard to check if HTMLElement

      this.draggableEl = el as HTMLElement;
      this.init();
    });

    const { initialPosition, containerId = "" } = options;
    const { x = 0, y = 0 } = initialPosition;

    this.x = x;
    this.y = y;

    this.updateElPosition();

    this.containerId = containerId;
  }

  init() {
    const onDrag = this.#onDrag;
    const onDragStart = this.#onDragStart;
    const onDragEnd = this.#onDragEnd;
    const host = this.host;

    const updateState = (state: State) => (this.state = state);

    this.pointerTracker = new PointerTracker(this.draggableEl, {
      start(pointer) {
        onDragStart(pointer);
        updateState("dragging");
        host.requestUpdate();
        return true;
      },
      move(previousPointers, changedPointers) {
        onDrag(previousPointers, changedPointers);
      },
      end(pointer, ev) {
        onDragEnd(pointer, ev);
        updateState("idle");
        host.requestUpdate();
      },
    });
  }

  hostDisconnected(): void {
    if (this.pointerTracker) {
      this.pointerTracker.stop();
    }
  }

  updateElPosition() {
    this.styles.transform = `translate(${this.x}px, ${this.y}px)`;
  }

  handleWindowMove(pointer: Pointer) {
    const el = this.draggableEl;
    const containerEl = this.getContainerEl();

    if (!el || !containerEl) return;

    const oldX = this.x;
    const oldY = this.y;

    // JavaScript’s floats can be weird, so we’re flooring these to integers.
    const cursorPositionX = Math.floor(pointer.pageX);
    const cursorPositionY = Math.floor(pointer.pageY);

    const hasCursorMoved =
      cursorPositionX !== this.cursorPositionX ||
      cursorPositionY !== this.cursorPositionY;

    if (hasCursorMoved) {
      const { bottom, height } = el.getBoundingClientRect();
      const { right, width } = containerEl.getBoundingClientRect();

      // The difference between the cursor’s previous position and its current position.
      const xDelta = cursorPositionX - this.cursorPositionX;
      const yDelta = cursorPositionY - this.cursorPositionY;

      // The happy path - if the element doesn’t attempt to go beyond the browser’s boundaries.
      this.x = oldX + xDelta;
      this.y = oldY + yDelta;

      const outOfBoundsTop = this.y < 0;
      const outOfBoundsLeft = this.x < 0;
      const outOfBoundsBottom = bottom + yDelta > window.innerHeight;
      const outOfBoundsRight = right + xDelta >= window.innerWidth;

      this.cursorPositionX = cursorPositionX;
      this.cursorPositionY = cursorPositionY;

      // Otherwise, we force the window to remain within the browser window.
      if (outOfBoundsTop) {
        this.y = 0;
      }

      if (outOfBoundsLeft) {
        this.x = 0;
      }

      if (outOfBoundsBottom) {
        this.y = window.innerHeight - height;
      }

      if (outOfBoundsRight) {
        this.x = Math.floor(window.innerWidth - width);
      }

      this.updateElPosition();
      this.host.requestUpdate();
    }
  }

  #onDragStart = (pointer: Pointer) => {
    this.cursorPositionX = Math.floor(pointer.pageX);
    this.cursorPositionY = Math.floor(pointer.pageY);

    return true;
  };

  #onDrag = (_previousPointers: Pointer[], pointers: Pointer[]) => {
    const [pointer] = pointers;
    const el = this.draggableEl;

    const event = new CustomEvent("window-drag", {
      bubbles: true,
      composed: true,
      detail: {
        pointer,
        containerEl: this.getContainerEl(),
        draggableEl: el,
      },
    });

    this.host.dispatchEvent(event);
    this.handleWindowMove(pointer);
  };

  #onDragEnd = (_pointer: Pointer, ev: PtInputEvent) => {
    const el = ev.target! as HTMLDivElement;
    el.removeAttribute("data-state");
  };
}
