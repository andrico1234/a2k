import { css, html, LitElement } from "lit";
import { property, state } from "lit/decorators.js";

export class A2kSelect extends LitElement {
  static styles = css`
    * {
      box-sizing: border-box;
    }

    /*  */
  `;

  @property({ type: String })
  label = "";

  @property({ type: String })
  selectedItem: { value: string; label: string } | null = null;

  @state()
  expanded = false;

  placeholder = "Choose an option";

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
    console.log(e.key);
    if (e.key === "ArrowDown" || e.key === "Enter" || e.code === "Space") {
      this._openListbox();
    }
  }

  handleSelectClick() {
    this.expanded ? this._closeListbox() : this._openListbox();
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
              ${this.selectedItem ? this.selectedItem.label : this.placeholder}
              <slot name="icon"> > </slot>
            </div>
          </div>
          <!-- if I put an event handler here, is that an example of event delegation? -->
          <div
            class="combo-menu"
            role="listbox"
            id="listbox1"
            aria-labelledby="label"
            tabindex="-1"
            @click="${this.handleOptionSelect}"
          >
            ${this.expanded
              ? html`
                  <option tabindex="0" value="one">uno</option>
                  <option tabindex="0" value="two">dos</option>
                  <option tabindex="0" value="three">trois</option>
                `
              : null}
          </div>
        </div>
      </div>
    `;
  }
}

// Keyboard support

// with closed select
// down arrow (opens select box)

// add keyboard event listener on the root
// if open, and we press esc, then close it.
