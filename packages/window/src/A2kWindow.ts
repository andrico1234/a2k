import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { DragController, getSmallestValue } from "@a2000/utilities";

import "@a2000/stack/a2k-stack.js";
import "@a2000/panel/a2k-panel.js";

import "./a2k-window-topbar";
import "./a2k-window-actions";

// TODO: add a window context that tracks the active states of the windows and adjust their position in the stacks accordingly

export class A2kWindow extends LitElement {
  static styles = css`
    :host([hidden]) {
      display: none;
    }

    ::slotted(*) {
      padding: 0 var(--window-spacing-horizontal);
    }

    ::slotted([slot="toolbar"]) {
      padding: 0;
    }

    ::slotted([slot="statusbar"]) {
      padding: 0;
    }

    #window {
      font-family: var(--font-primary);
      letter-spacing: var(--font-primary-letter-spacing);
      position: absolute;
      width: var(--window-width);
      max-width: 100%;
    }

    #draggable {
      width: 100%;
      position: relative;
    }

    #draggable[data-dragging="idle"] {
      cursor: var(--cursor-grab);
    }

    #draggable[data-dragging="dragging"] {
      cursor: var(--cursor-grabbing);
    }

    #topbar-wrapper {
      display: flex;
      justify-content: space-between;
    }
  `;

  @property({ type: String })
  heading = "";

  @property({ type: Boolean })
  draggable = false;

  @property({ type: Boolean })
  closeable = false;

  private drag = new DragController(this, {
    initialPosition: {
      x: 32,
      y: 32,
    },
    getContainerEl: () => this.shadowRoot!.querySelector("#window"),
    getDraggableEl: () => this.getDraggableEl(),
  });

  async getDraggableEl() {
    await this.updateComplete;
    return this.shadowRoot!.querySelector("#draggable");
  }

  constructor() {
    super();

    this.addEventListener("close", () => {
      return this.remove();
    });
  }

  protected firstUpdated(): void {
    const { left } = this.drag.styles;
    const { offsetWidth } = this.renderRoot.querySelector(
      "#window"
    ) as HTMLDivElement;

    const availableWidth = getSmallestValue(screen.availWidth, innerWidth);

    const parsedLeft = Number(left?.replace("px", ""));

    if (parsedLeft + offsetWidth > availableWidth) {
      this.drag.styles = {
        ...this.drag.styles,
        left: "0px",
      };

      this.requestUpdate();
    }
  }

  render() {
    return html`
      <div id="window" style=${styleMap(this.drag.styles)}>
        <a2k-panel>
          <div id="topbar-wrapper">
            <div id="draggable" data-dragging=${this.drag.state}>
              <a2k-window-topbar>${this.heading}</a2k-window-topbar>
            </div>
            <a2k-window-actions
              ?closeable="${this.closeable}"
            ></a2k-window-actions>
          </div>
          <slot name="toolbar"></slot>
          <a2k-stack>
            <slot></slot>
          </a2k-stack>
          <slot name="statusbar"></slot>
        </a2k-panel>
      </div>
    `;
  }
}

// https://codepen.io/rootVIII/details/VwMXxKV
// https://www.joshwcomeau.com/react/animating-the-unanimatable/
