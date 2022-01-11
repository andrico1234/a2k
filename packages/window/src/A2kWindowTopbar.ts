import { html, css, LitElement } from "lit";

export class A2kWindowTopbar extends LitElement {
  static styles = css`
    .topbar-wrapper {
      background: var(--window-topbar-background);
    }

    h2 {
      margin: 0;
      font-size: var(--window-topbar-heading-font-size);
      color: var(--window-topbar-heading-color);
      padding: 0 var(--window-spacing-horizontal);
    }
  `;

  render() {
    return html`<div class="topbar-wrapper">
      <h2 class="heading">
        <slot></slot>
      </h2>
    </div>`;
  }
}
