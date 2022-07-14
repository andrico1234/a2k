import { css, html, LitElement } from "lit";

export class A2kWindowToolbar extends LitElement {
  static styles = css`
    #toolbar {
      border-color: var(--color-gray-300) var(--color-gray-700)
        var(--color-gray-700) var(--color-gray-300);
      border-width: 2px;
      border-style: solid;
    }

    #separator {
      border-bottom: 5px solid var(--color-gray-400);
    }
  `;

  render() {
    return html`<div id="toolbar">
        <slot></slot>
      </div>
      <div id="separator"></div>`;
  }
}
