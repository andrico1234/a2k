import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import "@a2000/cover/a2k-cover.js";

const messages = ["Booting Up..."];

export class A2kStartup extends LitElement {
  static styles = css`
    :host {
      color: white;
      text-align: center;
    }
  `;

  startupTime = 5000;

  @property({ type: String })
  image = "";

  @property({ type: String })
  footerText = "Copyright Ⓒ 1999 - 2000. andricos2000";

  @property()
  messages = messages;

  render() {
    return html`
      <a2k-cover>
        <div slot="principal">
          <h1>Hey there</h1>
        </div>
        <div slot="footer">${this.footerText}</div>
      </a2k-cover>
    `;
  }
}
