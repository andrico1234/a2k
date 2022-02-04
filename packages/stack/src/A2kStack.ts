import { html, css, LitElement } from "lit";

export class A2kStack extends LitElement {
  static styles = css`
    #stack {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: var(--stack-spacing-top) !important;
    }
  `;

  render() {
    return html`<div id="stack">
      <slot></slot>
    </div>`;
  }
}
