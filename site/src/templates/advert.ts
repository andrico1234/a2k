import { html, css, LitElement } from "lit";
import { property, customElement } from "lit/decorators.js";

// I want this element to pop up inside of the parent element at a random position, any where between 1 - 20 seconds after parent element exists

// The UI element
// - absolutely positioned element

@customElement("a2k-advert")
export class Advert extends LitElement {
  static styles = css`
    #wrapper {
      position: absolute;
      top: 0;
      left: 0;
      border: 1px solid red;
    }
  `;

  render() {
    return html`<div id="wrapper"><p>Hello there</p></div>`;
  }
}
