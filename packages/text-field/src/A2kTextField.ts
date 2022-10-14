import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { FormControlMixin } from "@open-wc/form-control";

export class A2kTextField extends FormControlMixin(LitElement) {
  static styles = css`
    * {
      box-sizing: border-box;
      letter-spacing: var(--letter-spacing);
    }

    :host {
      display: block;
      width: 100%;
    }

    input {
      font-family: var(--font-primary);
      font-size: var(--text-field-font-size);
      padding-inline: var(--text-field-padding-inline);
      width: 100%;
      height: var(--text-field-height);
      border-top: var(--text-field-border-top);
      border-left: var(--text-field-border-left);
      border-bottom: var(--text-field-border-bottom);
      border-right: var(--text-field-border-right);
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

  @property()
  placeholder = "";

  handleInputChange(e: InputEvent) {
    const target = e.target as HTMLInputElement;
    this.setValue(target.value);

    const customEvent = new Event("change", { composed: true, bubbles: true });
    this.dispatchEvent(customEvent);
  }

  connectedCallback(): void {
    super.connectedCallback();

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
          placeholder=${this.placeholder}
          type="text"
          @input=${this.handleInputChange}
          @change=${this.handleInputChange}
        />
      </div>
    `;
  }
}
