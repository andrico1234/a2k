import { html, css, LitElement } from "lit";
import "./a2k-window-topbar";
export class A2kWindow extends LitElement {
  static styles = css`
    ::slotted(*) {
      margin: 0;
      margin-top: var(--window-content-spacing-top);
    }

    ::slotted(*:first-child) {
      margin-top: 0;
    }

    .wrapper {
      border: var(--window-border);
      box-shadow: var(--window-shadow);
      background-color: var(--window-color-background);
      width: fit-content;
      position: absolute;
      top: 200px;
      left: 100px;
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
