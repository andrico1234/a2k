import { html, css, LitElement } from "lit";
import { property, customElement, query } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

function getRandomNumber(max: number) {
  return Math.ceil(Math.random() * max);
}

@customElement("a2k-advert")
export class Advert extends LitElement {
  static styles = css`
    #wrapper {
      position: absolute;
      width: 200px;
      height: 200px;
    }
  `;

  @property()
  styles = { top: "0", left: "0" };

  @property()
  imgSrc = "";

  @property()
  alt = "";

  @query("#wrapper")
  wrapperEl!: HTMLDivElement;

  displayDelay: number;

  delayTimeout = null;

  constructor() {
    super();

    this.displayDelay = getRandomNumber(5) * 1000;
    this.setupAppearance();
  }

  private setupAppearance() {
    setTimeout(() => {
      this.triggerAppearance();
      this.setElPosition();
    }, this.displayDelay);
  }

  private triggerAppearance() {
    this.wrapperEl.removeAttribute("hidden");
  }

  private setElPosition() {
    const [maxX, maxY] = this.calculateValidPositionRange();

    const xPos = getRandomNumber(maxX);
    const yPos = getRandomNumber(maxY);

    this.styles = {
      left: `${xPos}px`,
      top: `${yPos}px`,
    };
  }

  private calculateValidPositionRange(): [number, number] {
    const { offsetParent } = this.wrapperEl;
    const { width, height } = this.wrapperEl.getBoundingClientRect();
    const windowDimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const { width: parentsWidth, height: parentsHeight } =
      offsetParent?.getBoundingClientRect() ?? windowDimensions;

    const xDiff = parentsWidth - width;
    const maxX = xDiff > 0 ? xDiff : 0;

    const yDiff = parentsHeight - height;
    const maxY = yDiff > 0 ? yDiff : 0;

    return [maxX, maxY];
  }

  render() {
    return html`<div style=${styleMap(this.styles)} hidden id="wrapper">
      <img src=${this.imgSrc} alt=${this.alt} />
    </div>`;
  }
}
