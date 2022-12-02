import { html, css, LitElement } from "lit";

export class A2kBlueScreen extends LitElement {
  static styles = css``;

  render() {
    return html` <div>
      <slot></slot>
    </div>`;
  }
}
