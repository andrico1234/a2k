import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";

export class A2kWindowTopbar extends LitElement {
  static styles = css`
    #wrapper {
      background: var(--window-topbar-background);
      user-select: none;
      height: var(--window-topbar-height);
      display: flex;
      align-items: center;
    }

    h2 {
      margin: 0;
      font-size: var(--window-topbar-heading-font-size);
      color: var(--window-topbar-heading-color);
      padding: 0 var(--window-spacing-horizontal);
    }
  `;

  @property({ type: Boolean })
  closeable = false;

  render() {
    return html`
      <div id="wrapper">
        <h2 class="heading">
          <slot></slot>
        </h2>
      </div>
    `;
  }
}
