import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

@customElement("a2k-progress-unit")
export class ProgressUnit extends LitElement {
  static styles = css`
    #unit {
      width: 12px;
      height: 100%;
      display: flex;
      flex-direction: row;
    }

    #unit > div {
      width: 6px;
      height: 100%;
    }

    .half-filled > div:first-child {
      background: var(--color-blue-100);
    }

    .filled > :last-child {
      background: var(--color-blue-100);
    }
  `;

  @property()
  filled: "filled" | "half" | "none" = "none";

  render() {
    const classes = {
      "half-filled": this.filled !== "none",
      filled: this.filled === "filled",
    };

    return html`<div class=${classMap(classes)} id="unit">
      <div></div>
      <div></div>
    </div>`;
  }
}
