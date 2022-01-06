import { html, css, LitElement } from "lit";

// This should be a stack

export class A2kWindow extends LitElement {
  static styles = css`
    ::slotted(*) {
      margin: 0;
      margin-top: var(--window-content-spacing-top);
    }

    ::slotted(*:first-child) {
      margin-top: 0;
    }

    .wrapper {
      border: var(--window-border);
      box-shadow: var(--window-shadow);
      background-color: var(--window-color-background);
    }
  `;

  render() {
    return html` <div class="wrapper">
      <slot></slot>
    </div>`;
  }
}
