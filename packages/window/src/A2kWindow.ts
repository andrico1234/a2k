import { html, css, LitElement } from "lit";
import "./a2k-window-topbar";
export class A2kWindow extends LitElement {
  static styles = css`
    ::slotted(*) {
      margin-top: var(--window-content-spacing-top) !important;
    }

    ::slotted(*:first-child) {
      margin-top: 0 !important;
    }

    .wrapper {
      --inset-shadow-padding: 2px;

      border: var(--window-border);
      box-shadow: var(--window-shadow);
      background-color: var(--window-color-background);
      width: fit-content;
      position: absolute;
      padding-top: var(--inset-shadow-padding);
      padding-left: var(--inset-shadow-padding);
      top: 0;
      left: 0;

      width: var(--window-width);
    }

    .content {
      padding: 0 var(--window-spacing-horizontal);
    }
  `;

  static properties = {
    title: { type: String },
  };

  render() {
    return html` <div class="wrapper">
      <a2k-window-topbar>${this.title}</a2k-window-topbar>
      <div class="content">
        <slot></slot>
      </div>
    </div>`;
  }
}
