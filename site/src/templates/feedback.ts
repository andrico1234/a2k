import { css, html, LitElement } from "lit";

class Feedback extends LitElement {
  render() {
    return html` <a2k-window draggable closeable heading="Share your thoughts">
      <a2k-select></a2k-select>
    </a2k-window>`;
  }
}

window.customElements.define("a2k-feedback", Feedback);
