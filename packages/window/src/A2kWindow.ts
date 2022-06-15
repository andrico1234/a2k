import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { StyleInfo, styleMap } from "lit/directives/style-map.js";
import PointerTracker, {
  Pointer,
  InputEvent as PtInputEvent,
} from "pointer-tracker";

import "@a2000/stack/a2k-stack.js";
import "@a2000/panel/a2k-panel.js";

import "./a2k-window-topbar";

// TODO: add a window context that tracks the active states of the windows and adjust their position in the stacks accordingly
// When adding a new one, increate the initial left and top position by a few pixels

// How can I ensure that the grabbing cursors display consistently.
// it appears that when I change the cursor for the element, it changes but only in the place that the element is it on the start of dragging.
// it doesn't move along with the element
// I can set the state when starting/ending dragging too but there seems to be a delay, so what are the most appropriate event handlers to manage this in?
// I get something that kinda works if I also apply state to the root to override the current cursor when dragging, but this comes with its own host of problems.
export class A2kWindow extends LitElement {
  static styles = css`
    #window {
      font-family: var(--font-primary);
      position: absolute;
      width: var(--window-width);
      max-width: 100%;
    }

    #draggable {
      cursor: grab;
    }

    .content {
      padding: 0 var(--window-spacing-horizontal);
    }
  `;

  pointerTracker: PointerTracker | null = null;

  @property({ type: String })
  title = "";

  @property({ type: Boolean })
  draggable = false;

  @property({ type: Boolean })
  closeable = false;

  cursorPositionX: number | null = null;
  cursorPositionY: number | null = null;

  @property()
  // Edit this so it's horizontally center on load
  styles: StyleInfo = {
    top: "16px",
    left: "16px",
    width: "var(--window-width)",
  };

  protected firstUpdated(): void {
    const draggableElement = this.renderRoot.querySelector(
      "#draggable"
    )! as HTMLDivElement;

    this.pointerTracker = new PointerTracker(draggableElement, {
      start: (pointer, event) => {
        this.#onDragStart(pointer, event);
        return true;
      },
      move: (prevPointers, changedPointers) => {
        this.#onDrag(changedPointers[0]);
      },
      end: (pointer, event) => {
        console.log(pointer);
        this.#onDrag(pointer);
        this.#onDragEnd(event);
      },
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();

    if (this.pointerTracker) {
      this.pointerTracker.stop();
    }
  }

  constructor() {
    super();

    this.addEventListener("close", () => {
      return this.remove();
    });
  }

  handleWindowMove(pointer: Pointer) {
    const { top, left } = this.styles;
    const { innerHeight, innerWidth } = window;
    const el = this.renderRoot.querySelector("#window");

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
      }
    }
  }

  #onDragStart(pointer: Pointer, ev: PtInputEvent) {
    this.cursorPositionX = Math.floor(pointer.pageX);
    this.cursorPositionY = Math.floor(pointer.pageY);

    const el = ev.target! as HTMLDivElement;
    el.setAttribute("data-state", "dragging");

    document.documentElement.setAttribute("data-state", "dragging");
  }

  #onDrag(pointer: Pointer) {
    window.requestAnimationFrame(() => this.handleWindowMove(pointer));
  }

  #onDragEnd(ev: PtInputEvent) {
    const el = ev.target! as HTMLDivElement;
    el.removeAttribute("data-state");

    document.documentElement.removeAttribute("data-state");
  }

  render() {
    return html`
      <div id="window" style=${styleMap(this.styles)}>
        <a2k-panel>
          <div id="draggable">
            <a2k-window-topbar ?closeable="${this.closeable}"
              >${this.title}</a2k-window-topbar
            >
          </div>
          <div class="content">
            <a2k-stack>
              <slot></slot>
            </a2k-stack>
          </div>
        </a2k-panel>
      </div>
    `;
  }
}

// https://codepen.io/rootVIII/details/VwMXxKV
// https://www.joshwcomeau.com/react/animating-the-unanimatable/
