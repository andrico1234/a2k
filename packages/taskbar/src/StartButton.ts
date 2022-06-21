import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import "@a2000/icons/a2k-icon";
import "./StartMenu";

@customElement("a2k-start-button")
export class StartButton extends LitElement {
  static styles = css`
    .wrapper {
      position: relative;
      height: 100%;
    }

    button {
      display: flex;
      align-items: center;
      gap: var(--taskbar-content-gap);
      font-family: var(--font-primary);
      height: 100%;
      font-weight: var(--font-weight-heavy);
      font-size: var(--font-size-100);
      line-height: var(--font-size-100);
      background-color: var(--color-gray-600);
      cursor: var(--cursor-pointer);
      border: var(--button-border);
      border-left: 1px dotted var(--color-white);
      border-top: 1px dotted var(--color-white);
      box-shadow: var(--button-shadow);
      outline-color: var(--outline-color-focus);
      outline-offset: var(--outline-offset-focus);
    }

    button:active {
      border-bottom: 2px solid transparent;
      border-right: 0;
      border-left: 1px dotted var(--color-black);
      border-top: 1px dotted var(--color-black);
      box-shadow: var(--button-shadow-active);
      transform: translate(2px, 2px);
    }
  `;

  // this could be moved into a mixin or a controller

  // handle a global click. if click is outside this element, hide the thing
  // it's outside the element if click target is outside of the parent element.

  // refactor this button into an IconButton, which extends the A2kButton component

  private _hideOnClickOutside = (event: MouseEvent) => {
    if (!event.composedPath().includes(this)) {
      this._isMenuOpen = false;
      document.removeEventListener("click", this._hideOnClickOutside);
    }
  };

  @state()
  private _isMenuOpen = false;

  private _toggleMenu() {
    const newOpenState = !this._isMenuOpen;

    if (newOpenState) {
      document.addEventListener("click", this._hideOnClickOutside);
    } else {
      document.removeEventListener("click", this._hideOnClickOutside);
    }

    this._isMenuOpen = newOpenState;
  }

  render() {
    return html`
      <div class="wrapper">
        <a2k-start-menu open="${this._isMenuOpen}"></a2k-start-menu>
        <button @click="${this._toggleMenu}">
          <a2k-icon icon="windows-icon"></a2k-icon>
          Start
        </button>
      </div>
    `;
  }
}
