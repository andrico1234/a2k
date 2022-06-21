import { html, LitElement } from "lit";
import { property } from "lit/decorators.js";

import "@a2000/button/a2k-button.js";

export class A2kWindowActions extends LitElement {
  handleClose(e: PointerEvent) {
    const event = new Event("close", { bubbles: true, composed: true });

    (e.target as HTMLButtonElement).dispatchEvent(event);
  }

  @property({ type: Boolean })
  closeable = false;

  render() {
    return html`<a2k-button
      ?disabled="${!this.closeable}"
      @click="${this.handleClose}"
      size="small"
    >
      Close
    </a2k-button> `;
  }
}
