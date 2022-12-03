import { html, css, LitElement } from "lit";
import "@a2000/cover/a2k-cover.js";

export class A2kBlueScreen extends LitElement {
  static styles = css`
    #wrapper {
      background: var(--blue-screen-color-background);
    }

    [slot="heading"] {
      color: var(--blue-screen-font-color);
      font-weight: var(--blue-screen-font-weight);
      font-size: var(--blue-screen-font-size);
    }
  `;

  render() {
    return html`
      <div id="wrapper">
        <a2k-cover>
          <div slot="heading"><slot></slot></div>
        </a2k-cover>
      </div>
    `;
  }
}
