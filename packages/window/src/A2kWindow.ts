import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { DragController } from "@a2000/utilities";

import "@a2000/stack/a2k-stack.js";
import "@a2000/panel/a2k-panel.js";

import "./a2k-window-topbar";

// TODO: add a window context that tracks the active states of the windows and adjust their position in the stacks accordingly

export class A2kWindow extends LitElement {
  static styles = css`
    #window {
      font-family: var(--font-primary);
      position: absolute;
      width: var(--window-width);
      max-width: 100%;
    }

    #draggable[data-dragging="idle"] {
      cursor: var(--cursor-grab);
    }

    #draggable[data-dragging="dragging"] {
      cursor: var(--cursor-grabbing);
    }

    .content {
      padding: 0 var(--window-spacing-horizontal);
    }
  `;

  @property({ type: String })
  title = "";

  @property({ type: Boolean })
  draggable = false;

  @property({ type: Boolean })
  closeable = false;

  private drag = new DragController(this);

  constructor() {
    super();

    this.addEventListener("close", () => {
      return this.remove();
    });
  }

  render() {
    return html`
      <div id="window" style=${styleMap(this.drag.styles)}>
        <a2k-panel>
          <div id="draggable" ${this.drag.draggable()}>
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
