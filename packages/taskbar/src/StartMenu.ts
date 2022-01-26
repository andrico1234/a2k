import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("a2k-start-menu")
export class StartMenu extends LitElement {
  static styles = css`
    .start-menu {
      height: 200px;
      width: 200px;
      position: absolute;
      background: red;
      bottom: calc(0px + var(--taskbar-height));
      display: none;
    }

    .start-menu.open {
      display: block;
    }
  `;

  @property()
  open = false;

  render() {
    const isOpen = String(this.open) === "true";

    return html` <div class="start-menu ${isOpen ? "open" : ""}">Start</div> `;
  }
}

// what should the component look like?
// should the start button

// refactor this to be a popup menu component?

// popup menu has a wrapper component that manages the state
// it takes to slots, the invoker, and the content
