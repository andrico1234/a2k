import { css, html, LitElement } from "lit";

class IE5 extends LitElement {
  static styles = css`
    :host {
      --window-color-background: white;
    }

    a2k-window > a2k-marquee {
      padding: 0;
    }
  `;

  render() {
    return html` <a2k-window draggable closeable heading="Internet Explorer 5">
      <a2k-marquee>
        <p slot="text">
          Internet Explorer has now reached end of life. RIP king.
        </p>
      </a2k-marquee>
      <div>
        <a2k-icon icon="info-icon"></a2k-icon>
        <p>Coming soon</p>
      </div>
    </a2k-window>`;
  }
}

window.customElements.define("a2k-ie5", IE5);
