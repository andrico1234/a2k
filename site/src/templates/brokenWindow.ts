import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

export class BrokenWindow extends LitElement {
  static styles = css`
    #outer-wrapper {
      position: absolute;
      display: flex;
    }

    a2k-panel {
      width: 100%;
    }

    a2k-panel > div {
      display: flex;
    }
  `;

  @property()
  height = "";

  @property()
  width = "";

  @property()
  top = "";

  @property()
  left = "";

  render() {
    const parentStyles = styleMap({
      width: this.width,
      top: this.top,
      left: this.left,
    });

    const childStyles = styleMap({
      height: this.height,
    });

    return html`
      <div style=${parentStyles} id="outer-wrapper">
        <a2k-panel>
          <div style=${childStyles}></div>
        </a2k-panel>
      </div>
    `;
  }
}

window.customElements.define("a2k-broken-window", BrokenWindow);
