import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "@a2000/icons/windows-logo";

@customElement("a2k-start-button")
export class StartButton extends LitElement {
  static styles = css`
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
      cursor: pointer;
      border: var(--taskbar-start-button-border);
      border-left: 1px dotted var(--color-white);
      border-top: 1px dotted var(--color-white);
      box-shadow: var(--taskbar-start-button-shadow);
    }

    button:active {
      border: 0;
      border-left: 1px dotted var(--color-black);
      border-top: 1px dotted var(--color-black);
      box-shadow: var(--taskbar-start-button-shadow-active);
    }

    .icon-wrapper {
      width: 32px;
    }
  `;

  render() {
    return html`<button>
    <div class="icon-wrapper">
      <a2k-windows-logo>
    </div>
    Start
    </button>`;
  }
}
