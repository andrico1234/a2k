import { css, html, LitElement } from "lit";

class IE5 extends LitElement {
  static styles = css`
    :host {
      --window-color-background: white;
    }
  `;

  render() {
    return html` <a2k-window draggable closeable heading="Internet Explorer 5">
      <div>
        <a2k-icon icon="info-icon"></a2k-icon>
        <p>Coming soon</p>
      </div>
    </a2k-window>`;
  }
}

window.customElements.define("a2k-ie5", IE5);
