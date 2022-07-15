import { html, css, LitElement } from "lit";
import { property, query } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

export class A2kDesktop extends LitElement {
  static styles = css`
    #desktop {
      height: 100%;
    }

    #desktop > slot {
      display: flex;
      flex-flow: column wrap;
      width: fit-content;
    }
  `;

  @property()
  slotHeightStyles = {
    height: "0px",
  };

  @query("#desktop")
  desktopContainer!: HTMLSlotElement;

  protected firstUpdated(): void {
    const containerHeight = getComputedStyle(this.desktopContainer).height;

    this.slotHeightStyles = { height: containerHeight };
  }

  render() {
    return html`<div id="desktop">
      <slot id="slot" style=${styleMap(this.slotHeightStyles)}></slot>
    </div>`;
  }
}
