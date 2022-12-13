import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

export class BrokenWindow extends LitElement {
  static styles = css`
    #outer-wrapper {
      position: absolute;
      display: flex;
      top: 0;
    }

    a2k-panel {
      width: 100%;
    }

    a2k-panel > div {
      display: flex;
    }
  `;

  @property({ type: Number })
  height = 0;

  @property({ type: Number })
  width = 0;

  @property({ type: Number })
  top = 0;

  @property({ type: Number })
  left = 0;

  render() {
    const parentStyles = styleMap({
      width: `${this.width}px`,
      transform: `translate(${this.left}px, ${this.top}px)`,
    });

    const childStyles = styleMap({
      height: `${this.height}px`,
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
