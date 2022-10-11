import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
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

  @property()
  label = "";

  handleInputChange(e: InputEvent) {
    const target = e.target as HTMLInputElement;

    this.setValue(target.value);
  }

  constructor() {
    super();

    if (this.label) {
      this.label = `${this.label}:`;
    }
  }

  render() {
    return html`
      <div>
        <label for="input">${this.label}</label>
        <input
          id="input"
          name=${this.name}
          defaultValue=${this.defaultValue}
          type="text"
          @input=${this.handleInputChange}
          @change=${this.handleInputChange}
        />
      </div>
    `;
  }
}
