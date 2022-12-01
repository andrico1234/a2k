import { html, css, LitElement, nothing } from "lit";
import { property } from "lit/decorators.js";
import { FormControlMixin } from "@open-wc/form-control";

export class A2kButton extends FormControlMixin(LitElement) {
  static styles = css`
    :host {
      width: fit-content;
    }

    :host([disabled]) {
      pointer-events: none;
      cursor: not-allowed;
    }

    button {
      background-color: var(--button-color-background);
      color: (--button-font-color);
      font-family: var(--button-font-family);
      padding: var(--button-padding);
      font-weight: var(--button-font-weight);
      box-sizing: border-box;
      box-shadow: var(--button-shadow);
      border-width: var(--button-border-width);
      border-color: var(--button-border-color);
      border-style: var(--button-border-style);
      outline-color: var(--outline-color-focus);
      outline-offset: var(--outline-offset-focus);
      cursor: var(--cursor-pointer);
      display: inline-block;
      border: var(--button-border);
      border-left: 1px dotted var(--color-white);
      border-top: 1px dotted var(--color-white);
      box-shadow: var(--button-shadow);
    }

    button[data-size="small"] {
      padding: var(--button-padding-small);
      box-shadow: var(--button-small-shadow);
    }

    button[data-size="large"] {
      padding: var(--button-padding-large);
      font-size: var(--button-font-size-large);
    }

    button:not([disabled]):active {
      border-bottom: 2px solid transparent;
      border-right: 0;
      border-left: 1px dotted var(--color-black);
      border-top: 1px dotted var(--color-black);
      box-shadow: var(--button-shadow-active);
      transform: translate(2px, 2px);
    }

    button[data-size="small"]:not([disabled]):active {
      box-shadow: var(--button-small-shadow-active);
      transform: translate(0px, 1px);
    }
  `;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: String })
  type = "";

  @property({ type: String })
  size: "small" | "medium" | "large" = "medium";

  handleSubmit() {
    this.form.requestSubmit();
  }

  connectedCallback(): void {
    super.connectedCallback();

    if (!this.type && this.form) {
      this.type === "submit";
    } else {
      this.type === "button";
    }

    // This is due to the Submit event crossing the shadow DOM's boundaries
    if (this.type === "submit") {
      this.addEventListener("click", this.handleSubmit);
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener("click", this.handleSubmit);
  }

  render() {
    return html` <button
      data-size="${this.size}"
      aria-label="${this.ariaLabel || nothing}"
      ?disabled=${this.disabled}
    >
      <slot></slot>
    </button>`;
  }
}
