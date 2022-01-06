import { html, css, LitElement } from "lit";

export class A2kWindowTopbar extends LitElement {
  static styles = css`
    .wrapper {
      background: var(--window-topbar-background);
      margin-left: 2px;
      margin-top: 2px;
    }

    h2 {
      margin: 0;
      font-size: var(--window-topbar-heading-font-size);
      color: var(--window-topbar-heading-color);
    }
  `;

  render() {
    return html`<div class="wrapper">
      <h2 class="heading">
        <slot></slot>
      </h2>
    </div>`;
  }
}
