import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";

import "./ProgressUnit";

// TODO: update this to have an automatic progress API
export class A2kProgress extends LitElement {
  static styles = css`
    #progress {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      box-shadow: var(--progress-shadow);
      padding-left: 3px;
      padding-right: 1px;
      padding-bottom: 2px;
      padding-top: 3px;
      height: var(--progress-height);
      border-right: var(--progress-border-right);
      gap: var(--progress-contents-gap);
      overflow: hidden;
    }
  `;

  @property({ type: Number })
  progress = 0;

  width = 0;

  protected async updated(
    _changedProperties: Map<string | number | symbol, unknown>
  ) {
    if (!this.width) {
      // In here and not firstUpdated as element doesn't have width if parent has `hidden` attribute
      this.generateProgressUnits();
    }

    if (_changedProperties.has("progress")) {
      this.updateProgressUnits();
    }
  }

  private async generateProgressUnits() {
    const component = this.renderRoot.querySelector("#progress");

    if (!component) return;

    await this.updateComplete;

    const width = component.getBoundingClientRect().width ?? 0;

    if (this.width === width) return;

    this.width = width;

    const { gap } = getComputedStyle(component);
    const gapNumber = Number(gap.replace("px", ""));

    // TODO: Get this value at run time, since 12 is the width defined in the style file
    const elWidth = gapNumber + 12;
    const elementCount = Math.ceil(width / elWidth);

    Array(elementCount)
      .fill(0)
      .forEach(() => {
        const progressUnit = document.createElement("a2k-progress-unit");
        // change this to none
        progressUnit.setAttribute("filled", "none");

        component?.appendChild(progressUnit);
      });
  }

  private async updateProgressUnits() {
    await this.updateComplete;

    const unitEls = this.renderRoot.querySelectorAll("a2k-progress-unit");
    const unitsToDisplayDecimal = (this.progress / 100) * unitEls.length;
    const remainder = getRemainder(unitsToDisplayDecimal);
    const unitsToDisplay = Math.floor(unitsToDisplayDecimal);

    unitEls.forEach((unit, i) => {
      if (i < unitsToDisplay) {
        unit.setAttribute("filled", "filled");
      } else if (i === unitsToDisplay && remainder >= 0.5) {
        unit.setAttribute("filled", "half");
      } else {
        unit.setAttribute("filled", "none");
      }
    });
  }

  render() {
    return html`
      <div aria-label="Loading progress" id="progress" role="progressbar"></div>
    `;
  }
}

const getRemainder = (number: number) => {
  return Math.floor((number % 1) * 10) / 10;
};
