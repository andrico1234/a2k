import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";

import "./ProgressUnit";

export class A2kProgress extends LitElement {
  static styles = css`
    #progress {
      width: 100%;
      display: flex;
      box-shadow: var(--shadow-inset-medium);
      padding-left: 3px;
      padding-right: 2px;
      padding-bottom: 2px;
      padding-top: 3px;
      height: 24px;
      border-right: 1px solid white;
      gap: 2px;
      overflow: hidden;
    }
  `;

  @property({ type: Number })
  progress = 0;

  width = 0;

  protected async firstUpdated() {
    const component = this.renderRoot.querySelector("#progress");

    await this.updateComplete;

    const width = component?.getBoundingClientRect().width ?? 0;

    if (this.width === width) return;

    this.width = width;

    const elementCount = Math.ceil(width / 14);

    // Generate the number elements

    Array(elementCount)
      .fill(0)
      .forEach(() => {
        const progressUnit = document.createElement("a2k-progress-unit");
        progressUnit.setAttribute("filled", "filled");

        component?.appendChild(progressUnit);
      });
  }

  render() {
    return html`<div id="progress" role="progress"></div>`;
  }
}
