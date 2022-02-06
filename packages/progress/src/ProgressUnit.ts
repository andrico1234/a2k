import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

// TODO: come up with a better way of handling half filled states, like a mask on top of the progress unit
@customElement("a2k-progress-unit")
export class ProgressUnit extends LitElement {
  static styles = css`
    #unit {
      width: var(--progress-unit-width);
      height: 100%;
      display: flex;
      flex-direction: row;
    }

    #unit > div {
      width: calc(var(--progress-unit-width) / 2);
      height: 100%;
    }

    .half-filled > div:first-child {
      background: var(--progress-unit-background);
    }

    .filled > :last-child {
      background: var(--progress-unit-background);
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
