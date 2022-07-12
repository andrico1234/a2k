import { html, css, LitElement } from "lit";
import { queryAssignedElements, query } from "lit/decorators.js";

export class A2kMarquee extends LitElement {
  static styles = css`
    :host * {
      margin: 0;
      overflow: hidden;
    }

    ::slotted(*) {
      margin: 0;
    }

    #marquee {
      width: 100%;
      position: relative;
    }

    #marquee-inner-1 {
      animation: move 10s both infinite linear;
    }

    #marquee-inner-2 {
      top: 0;
      position: absolute;
      width: 100%;
      animation: move 10s both 5s infinite linear;
    }

    @keyframes move {
      from {
        transform: translateX(100%);
      }

      to {
        transform: translateX(-100%);
      }
    }
  `;

  @queryAssignedElements({ slot: "text" })
  slotEl!: Array<HTMLElement>;

  @query("#marquee-inner-2")
  marqueeWrapperEl!: HTMLElement;

  protected firstUpdated(): void {
    const [textEl] = this.slotEl;
    const clonedNode = textEl.cloneNode(true);

    this.marqueeWrapperEl.appendChild(clonedNode);
  }

  render() {
    return html`<div id="marquee">
      <div id="marquee-inner-1">
        <slot name="text"></slot>
      </div>
      <div id="marquee-inner-2"></div>
    </div>`;
  }
}
