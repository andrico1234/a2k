import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { StyleInfo, styleMap } from "lit/directives/style-map.js";

import "@a2000/stack/a2k-stack.js";

import "./a2k-window-topbar";

export class A2kWindow extends LitElement {
  static styles = css`
    .wrapper {
      --inset-shadow-padding: 2px;

      border: var(--window-border);
      box-shadow: var(--window-shadow);
      background-color: var(--window-color-background);
      width: fit-content;
      position: absolute;
      padding-top: var(--inset-shadow-padding);
      padding-left: var(--inset-shadow-padding);
      top: 0;
      left: 0;

      width: var(--window-width);
    }

    .content {
      padding: 0 var(--window-spacing-horizontal);
    }
  `;

  static properties = {
    title: { type: String },
  };

  @property({ type: Boolean })
  draggable = true;

  @property()
  cursorPositionX: number | null = null;

  @property()
  cursorPositionY: number | null = null;

  @property()
  styles: StyleInfo = {
    top: "0px",
    left: "0px",
  };

  handleWindowMove(time: number, ev: DragEvent) {
    const { top, left } = this.styles;
    const { innerHeight, innerWidth } = window;
    const el = this.shadowRoot?.querySelector(".wrapper");

    if (!el) return;

    const parsedTop = Number(top?.replace("px", ""));
    const parsedLeft = Number(left?.replace("px", ""));

    const { pageX, pageY } = ev;

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

  #onDragStart(ev: DragEvent) {
    const img = new Image();
    ev.dataTransfer?.setDragImage(img, 0, 0);

    this.cursorPositionX = ev.pageX;
    this.cursorPositionY = ev.pageY;
  }

  #onDrag(ev: DragEvent) {
    window.requestAnimationFrame((time) => this.handleWindowMove(time, ev));
  }

  #onDragEnd() {
    this.cursorPositionX = null;
    this.cursorPositionY = null;
  }

  render() {
    return html` <div class="wrapper" style=${styleMap(this.styles)}>
      <div
        @dragstart="${this.#onDragStart}"
        @drag="${this.#onDrag}"
        @dragend="${this.#onDragEnd}"
        class="topbar-wrapper"
        draggable="${this.draggable}"
      >
        <a2k-window-topbar>${this.title}</a2k-window-topbar>
      </div>
      <div class="content">
        <a2k-stack>
          <slot></slot>
        </a2k-stack>
      </div>
    </div>`;
  }
}

// https://codepen.io/rootVIII/details/VwMXxKV
// https://www.joshwcomeau.com/react/animating-the-unanimatable/
