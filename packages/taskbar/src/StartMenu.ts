import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

import "@a2000/stack/a2k-stack.js";
import "@a2000/panel/a2k-panel.js";
import "@a2000/icons/help-logo";

import "./StartMenuItem";

@customElement("a2k-start-menu")
export class StartMenu extends LitElement {
  static styles = css`
    #start-menu {
      width: var(--start-menu-height);
      position: absolute;
      bottom: calc(0px + var(--taskbar-height));
      display: none;
    }

    #start-menu.open {
      display: block;
    }

    #content {
      display: flex;
      flex-direction: row;
    }

    #stack-wrapper {
      flex-grow: 1;
    }

    #side-strip {
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      background: var(--start-menu-strip-background-gradient);
      padding-block-top: var(--spacing-100);
    }

    #side-strip p {
      color: white;
      font-weight: var(--font-weight-600);
      margin: 0;
      padding-inline-start: var(--spacing-50);
    }
  `;

  @property()
  open = false;

  render() {
    const isOpen = String(this.open) === "true";

    return html`
      <div id="start-menu" class="${isOpen ? "open" : ""}">
        <a2k-panel>
          <div id="content">
            <div id="side-strip">
              <p>
                Andricos2000
              </p>
            </div>
            <div id="stack-wrapper">
              <a2k-stack>
                <a2k-start-menu-item>
                  <div slot="icon"><a2k-help-logo /></div>
                  Help
                </a2k-start-menu-item>
                <a2k-start-menu-item>
                  <div slot="icon"><a2k-help-logo /></div>
                  Help
                </a2k-start-menu-item>
                <a2k-start-menu-item>
                  <div slot="icon"><a2k-help-logo /></div>
                  Help
                </a2k-start-menu-item>
              </a2k-stack>
            </div>
          </a2k-panel>
        </div>
      </div>
    `;
  }
}

// what should the component look like?
// should the start button

// refactor this to be a popup menu component?

// popup menu has a wrapper component that manages the state
// it takes to slots, the invoker, and the content
