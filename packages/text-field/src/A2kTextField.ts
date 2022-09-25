import { css, html, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import { FormControlMixin } from "@open-wc/form-control";

export class A2kTextField extends FormControlMixin(LitElement) {
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

  static get formAssociated() {
    return true;
  }

  @property()
  defaultValue = "";

  @property()
  name = "";

  @state()
  value = "";

  handleInputChange(e: InputEvent) {
    const target = e.target as HTMLInputElement;

    this.value = target.value;
    this.setValue(this.value);
  }

  constructor() {
    super();
    this.value = this.defaultValue;
  }

  render() {
    return html`<input
      name=${this.name}
      defaultValue=${this.defaultValue}
      type="text"
      @input=${this.handleInputChange}
      @change=${this.handleInputChange}
    />`;
  }
}
