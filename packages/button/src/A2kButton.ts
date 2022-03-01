import { html, css, LitElement } from "lit";

export class A2kButton extends LitElement {
  static styles = css`
    #button {
      background-color: var(--button-color-background);
      font-family: var(--font-primary);
      padding: var(--button-padding);
      font-weight: var(--button-font-weight);
      box-sizing: border-box;
      box-shadow: var(--button-shadow);
      border-width: var(--button-border-width);
      border-color: var(--button-border-color);
      border-style: var(--button-border-style);
    }
  `;

  render() {
    return html` <button id="button">
      <slot></slot>
    </button>`;
  }
}
