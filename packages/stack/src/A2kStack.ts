import { html, css, LitElement } from "lit";

export class A2kStack extends LitElement {
  static styles = css`
    .wrapper {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }

    ::slotted(*) {
      margin-block-start: var(--stack-spacing-top) !important;
    }

    ::slotted(*:first-child) {
      margin-block: 0 !important;
    }
  `;

  render() {
    return html`<div class="wrapper">
      <slot></slot>
    </div>`;
  }
}
