import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";

const messages = ["Booting Up..."];

export class A2kStartup extends LitElement {
  static styles = css``;

  startupTime = 5000;

  @property()
  image = "";

  @property()
  footerText = "Copyright Ⓒ 1999 - 2000 Andricos2000";

  @property()
  messages = messages;

  render() {
    return html`<div></div>`;
  }
}
