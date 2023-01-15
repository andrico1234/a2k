import { html, css, LitElement, PropertyValues } from "lit";
import { property, customElement, query } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";

function getRandomNumber(max = 1, min = 0) {
  const diff = max - min;

  return Math.random() * diff + min;
}

@customElement("a2k-advert")
export class Advert extends LitElement {
  static styles = css`
    #wrapper {
      position: absolute;
    }
  `;

  @property()
  width = "0";

  @property()
  height = "0";

  @property()
  href = "";

  @property()
  styles = {
    top: "0",
    left: "0",
    zIndex: "0",
    width: this.width,
    height: this.height,
  };

  @property()
  imgStyles = {
    width: this.width,
  };

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

    this.displayDelay = getRandomNumber(6, 2) * 1000;
    this.styles.zIndex = `${Math.ceil(this.displayDelay)}`;
    this.setupAppearance();
  }

  willUpdate(changedProperties: PropertyValues) {
    if (changedProperties.has("width")) {
      this.styles.width = this.width;
      this.imgStyles.width = this.width;
      this.requestUpdate();
    }

    if (changedProperties.has("height")) {
      this.styles.height = this.height;
      this.requestUpdate();
    }
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

    this.styles.left = `${xPos}px`;
    this.styles.top = `${yPos}px`;
    this.requestUpdate();
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
      <a href=${this.href} target="_blank">
        <img
          src=${this.imgSrc}
          style=${styleMap(this.imgStyles)}
          alt=${this.alt}
        />
      </a>
    </div>`;
  }
}
