import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";

import "@a2000/button/a2k-button.js";
import "@a2000/icons/a2k-icon";

export class A2kWindowActions extends LitElement {
  static styles = css`
    #icon-wrapper {
      font-size: 8px;
    }
  `;

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
      <div id="icon-wrapper">
        <a2k-icon icon="cross-icon"></a2k-icon>
      </div>
    </a2k-button> `;
  }
}
