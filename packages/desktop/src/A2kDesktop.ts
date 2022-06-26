import { html, css, LitElement } from "lit";

export class A2kDesktop extends LitElement {
  static styles = css`
    #desktop {
      height: 100%;
    }
  `;

  render() {
    return html`<div id="desktop">
      <slot />
    </div>`;
  }
}
