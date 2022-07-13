import { html, css, LitElement } from "lit";
import { queryAssignedElements, query } from "lit/decorators.js";

export class A2kMarquee extends LitElement {
  static styles = css`
    :host {
      background: var(--marquee-background);
      padding: var(--spacing-50) 0;
    }

    :host * {
      margin: 0;
    }

    ::slotted(*) {
      margin: 0;
    }

    #marquee {
      overflow: hidden;
      width: 100%;
      position: relative;
    }

    #marquee:hover > * {
      animation-play-state: paused;
    }

    #marquee-inner-2 {
      top: 0;
      position: absolute;
      width: 100%;
    }

    @media (prefers-reduced-motion: no-preference) {
      #marquee-inner-1 {
        animation: marquee-move var(--marquee-animation-duration) both infinite
          linear;
      }

      #marquee-inner-2 {
        animation: marquee-move var(--marquee-animation-duration) both
          calc(var(--marquee-animation-duration) / 2) infinite linear;
      }
    }

    @keyframes marquee-move {
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
