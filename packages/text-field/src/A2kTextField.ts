import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";

export class A2kTextField extends LitElement {
  static styles = css`
    * {
      box-sizing: border-box;
    }

    :host {
      display: block;
      width: 100%;
    }

    input {
      font-family: var(--font-primary);
      padding: var(--text-field-padding);
      width: 100%;
      box-shadow: var(--text-input-border);
    }

    input::placeholder {
      font-family: var(--font-primary);
    }
  `;

  @property()
  defaultValue = "";

  render() {
    return html`<input value="${this.defaultValue}" type="text" />`;
  }
}
