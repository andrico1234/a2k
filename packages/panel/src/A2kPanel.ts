import { html, css, LitElement } from "lit";

export class A2kPanel extends LitElement {
  static styles = css`
    #panel {
      border: var(--panel-border);
      background-color: var(--panel-color-background);
      box-shadow: var(--panel-shadow);
    }
  `;

  render() {
    return html` <div id="panel">
      <slot></slot>
    </div>`;
  }
}

// https://codepen.io/rootVIII/details/VwMXxKV
// https://www.joshwcomeau.com/react/animating-the-unanimatable/
