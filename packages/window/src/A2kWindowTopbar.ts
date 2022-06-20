import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";

export class A2kWindowTopbar extends LitElement {
  static styles = css`
    .topbar-wrapper {
      background: var(--window-topbar-background);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      user-select: none;
    }

    h2 {
      margin: 0;
      font-size: var(--window-topbar-heading-font-size);
      color: var(--window-topbar-heading-color);
      padding: 0 var(--window-spacing-horizontal);
    }
  `;

  handleClose(e: PointerEvent) {
    const event = new Event("close", { bubbles: true, composed: true });

    (e.target as HTMLButtonElement).dispatchEvent(event);
  }

  closeButton = html`<button @click="${this.handleClose}">Close</button>`;

  @property({ type: Boolean })
  closeable = false;

  render() {
    return html`<div class="topbar-wrapper">
      <h2 class="heading">
        <slot></slot>
      </h2>
      ${this.closeable ? this.closeButton : ""}
    </div>`;
  }
}
