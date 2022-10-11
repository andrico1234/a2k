import { css, html, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import { FormControlMixin } from "@open-wc/form-control";
import "@a2000/button/a2k-button.js";
import "@a2000/icons/a2k-icon.js";

type Item = { value: string; label: string } | null;

export class A2kSelect extends FormControlMixin(LitElement) {
  static styles = css`
    :host {
      --select-input-height: 32px;
      --select-input-padding-inline: 12px;
      --select-input-min-width: 184px;

      --select-input-background-color: white;
      --select-input-option-color-hover: var(--color-blue-100);

      --select-input-label-width: var(--spacing-1200);
      --select-input-label-min-width: fit-content;
    }

    * {
      box-sizing: border-box;
    }

    #select-wrapper {
      display: flex;
      align-items: center;
    }

    label {
      min-width: var(--select-input-label-min-width);
      width: var(--select-input-label-width);
    }

    #select {
      flex: 1;
    }

    .combo-input {
      height: var(--select-input-height);
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: space-between;
      background: var(--select-input-background-color);
      border: 2px solid black;
      border-right: 2px solid white;
      border-bottom: 2px solid white;
      cursor: pointer;
    }

    .combo-input:focus {
      background: var(--select-input-option-color-hover);
      color: white;
    }

    .combo-input p {
      padding-inline: var(--select-input-padding-inline);
    }

    .listbox {
      border: 1px solid black;
      background: white;
      position: absolute;
      min-width: var(--select-input-min-width);
      width: fit-content;
    }

    slot:not([name])::slotted(*) {
      height: var(--select-input-height);
      padding-inline: var(--select-input-padding-inline);
      display: flex;
      align-items: center;
      cursor: var(--cursor-pointer);
    }

    slot:not([name])::slotted(*:hover),
    slot:not([name])::slotted(*:focus) {
      background: var(--select-input-option-color-hover);
      color: white;
      outline: 1px dotted white;
      outline-offset: -1px;
    }

    a2k-icon {
      font-size: 14px;
      transform: rotate(90deg);
    }
  `;

  @property({ type: String })
  label = "";

  @property({ type: String })
  selectedItem: Item = null;

  @property({ type: String })
  name = "";

  @state()
  expanded = false;

  @property({ type: String })
  placeholder = "Choose an option";

  private _options: Element[] = [];

  private _openListbox = () => {
    if (this.expanded) return;

    this.expanded = true;

    document.addEventListener("click", this._hideOnClickOutside);
  };

  private _closeListbox = () => {
    if (!this.expanded) return;

    this.expanded = false;

    document.removeEventListener("click", this._hideOnClickOutside);
  };

  private _hideOnClickOutside = (event: MouseEvent) => {
    if (!event.composedPath().includes(this)) {
      this._closeListbox();
    }
  };

  handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape" && this.expanded) {
      this._closeListbox();
    } else if (e.key === "Escape" && !this.expanded) {
      this.handleSetValue(null);
    }
  }

  handleSelectKeyDown(e: KeyboardEvent) {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.code === "Space") {
      if (!this.expanded) {
        this._openListbox();
      } else {
        this.moveFocusToOption(0);
      }
    }
  }

  moveFocusToOption(index: number) {
    const options = this._options;
    const option = options[index] as HTMLElement;

    option.focus();
  }

  handleSelectClick() {
    this.expanded ? this._closeListbox() : this._openListbox();
  }

  handleSetValue(item: Item) {
    // create new change event and dispatch it

    const newItem = item ? item : null;

    this.selectedItem = newItem;
    this.setValue(newItem?.value || "");
  }

  handleOptionSelect(e: Event) {
    const target = e.target as HTMLOptionElement;

    if (target.tagName !== "OPTION") return;

    const item = {
      value: target.value,
      label: target.innerText,
    };

    this.handleSetValue(item);
    this._closeListbox();
  }

  handleOptionKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter" || e.code === "Space") {
      this.handleOptionSelect(e);
    }

    if (e.key === "ArrowDown") {
      const target = e.target as HTMLOptionElement;
      if (target.nextElementSibling) {
        const nextElement = target.nextElementSibling as HTMLOptionElement;
        nextElement.focus();
      } else {
        this.moveFocusToOption(0);
      }
    }

    if (e.key === "ArrowUp") {
      const target = e.target as HTMLOptionElement;
      if (target.previousElementSibling) {
        const prevElement = target.previousElementSibling as HTMLOptionElement;
        prevElement.focus();
      } else {
        const options = this._options;
        const len = options.length;
        this.moveFocusToOption(len - 1);
      }
    }
  }

  toggleButton() {
    return html`<a2k-button tabindex="-1" size="small">
      <a2k-icon icon="chevron-icon"></a2k-icon>
    </a2k-button> `;
  }

  handleSlotchange(e: Event) {
    const target = e.target as HTMLSlotElement;
    const childNodes = target.assignedElements();

    childNodes.forEach((node) => {
      node.setAttribute("tabindex", "0");
    });

    this._options = childNodes;
  }

  constructor() {
    super();

    if (this.label) {
      this.label = `${this.label}:`;
    }
  }

  connectedCallback(): void {
    super.connectedCallback();

    this.addEventListener("keydown", this.handleKeyDown);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();

    this.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return html`
      <div id="select-wrapper">
        <label id="label">${this.label}</label>
        <div id="select">
          <div
            aria-controls="listbox"
            ?aria-expanded=${this.expanded}
            aria-haspopup="listbox"
            aria-labelledby="label"
            class="combo-input"
            role="combobox"
            @keydown=${this.handleSelectKeyDown}
            @click=${this.handleSelectClick}
            tabindex="0"
            name=${this.name}
            value=${this.selectedItem?.value}
          >
            <p>
              ${this.selectedItem ? this.selectedItem.label : this.placeholder}
            </p>
            <slot name="icon"> ${this.toggleButton()} </slot>
          </div>

          ${this.expanded
            ? html`
                <div
                  class="listbox"
                  role="listbox"
                  id="listbox"
                  aria-labelledby="label"
                  tabindex="-1"
                  @click=${this.handleOptionSelect}
                  @keydown=${this.handleOptionKeyDown}
                >
                  <slot @slotchange=${this.handleSlotchange}></slot>
                </div>
              `
            : null}
        </div>
      </div>
    `;
  }
}
