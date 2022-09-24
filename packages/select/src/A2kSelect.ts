import { css, html, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import "@a2000/button/a2k-button.js";
import "@a2000/icons/a2k-icon";

export class A2kSelect extends LitElement {
  static styles = css`
    :host {
      --select-input-height: 32px;
      --select-input-padding-inline: 12px;
      --select-input-min-width: 184px;

      --select-input-background-color: white;
      --select-input-option-color-hover: var(--color-blue-100);
    }

    * {
      box-sizing: border-box;
    }

    .combo-input {
      height: var(--select-input-height);
      display: flex;
      align-items: center;
      min-width: var(--select-input-min-width);
      width: fit-content;
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
      width: 100%;
    }

    .listbox {
      border: 1px solid black;
      background: white;
      position: absolute;
      min-width: var(--select-input-min-width);
      width: fit-content;
    }

    option {
      height: var(--select-input-height);
      padding-inline: var(--select-input-padding-inline);
      display: flex;
      align-items: center;
      cursor: var(--cursor-pointer);
    }

    option:hover,
    option:focus {
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
  selectedItem: { value: string; label: string } | null = null;

  @state()
  expanded = false;

  placeholder = "Choose an option";

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
    const options = this.renderRoot.querySelectorAll("option");
    const option = options[index];

    option.focus();
  }

  handleSelectClick() {
    this.expanded ? this._closeListbox() : this._openListbox();
  }

  handleOptionSelect(e: Event) {
    const target = e.target as HTMLOptionElement;

    if (target.tagName !== "OPTION") return;

    const item = {
      value: target.value,
      label: target.innerText,
    };

    this.selectedItem = item;

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
        const options = this.renderRoot.querySelectorAll("option");
        const len = options.length;
        this.moveFocusToOption(len - 1);
      }
    }
  }

  options() {
    return html` <option tabindex="0" value="one">uno</option>
      <option tabindex="0" value="two">dos</option>
      <option tabindex="0" value="three">trois</option>`;
  }

  toggleButton() {
    return html`<a2k-button tabindex="-1" size="small">
      <a2k-icon icon="chevron-icon"></a2k-icon>
    </a2k-button> `;
  }

  constructor() {
    super();

    this.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.expanded) {
        this._closeListbox();
      } else if (e.key === "Escape" && !this.expanded) {
        this.selectedItem = null;
      }
    });
  }

  render() {
    return html`
      <div>
        <label id="label">${this.label}</label>
        <div class="select">
          <div>
            <div
              aria-controls="listbox1"
              ?aria-expanded=${this.expanded}
              aria-haspopup="listbox"
              aria-labelledby="label"
              id="select"
              class="combo-input"
              role="combobox"
              @keydown=${this.handleSelectKeyDown}
              @click=${this.handleSelectClick}
              tabindex="0"
            >
              <p>
                ${this.selectedItem
                  ? this.selectedItem.label
                  : this.placeholder}
              </p>
              <slot name="icon"> ${this.toggleButton()} </slot>
            </div>
          </div>

          ${this.expanded
            ? html`
                <div
                  class="listbox"
                  role="listbox"
                  id="listbox1"
                  aria-labelledby="label"
                  tabindex="-1"
                  @click=${this.handleOptionSelect}
                  @keydown=${this.handleOptionKeyDown}
                >
                  ${this.options()}
                </div>
              `
            : null}
        </div>
      </div>
    `;
  }
}
