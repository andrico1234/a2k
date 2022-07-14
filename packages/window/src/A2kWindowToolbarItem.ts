import { css, html, LitElement } from "lit";

export class A2kWindowToolbarItem extends LitElement {
  static styles = css`
    #item {
      border-color: var(--color-gray-700) var(--color-gray-300)
        var(--color-gray-300) var(--color-gray-700);
      border-width: var(--border-width);
      border-style: solid;
      padding: var(--spacing-50);
      background-color: var(--window-toolbar-item-color-background);
    }
  `;

  render() {
    return html`<div id="item">
      <slot></slot>
    </div>`;
  }
}
