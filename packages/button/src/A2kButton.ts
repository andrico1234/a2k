import { html, css, LitElement } from "lit";

export class A2kButton extends LitElement {
  static styles = css`
    #button {
    }
  `;

  render() {
    return html` <button id="button">
      <slot></slot>
    </button>`;
  }
}
