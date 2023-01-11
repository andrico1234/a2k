import { html, css, LitElement } from "lit";
import { property, customElement, query } from "lit/decorators.js";

function getRandomNumber(max = 1, min = 0) {
  const diff = max - min;

  return Math.random() * diff + min;
}

@customElement("a2k-static-advert")
export class Advert extends LitElement {
  static styles = css`
    #wrapper {
      width: 100%;
    }

    img {
      width: 100%;
    }
  `;

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

    this.displayDelay = getRandomNumber(6, 2) * 500;
    this.setupAppearance();
  }

  private setupAppearance() {
    setTimeout(() => {
      this.triggerAppearance();
    }, this.displayDelay);
  }

  private triggerAppearance() {
    this.wrapperEl.removeAttribute("hidden");
  }

  render() {
    return html`<div hidden id="wrapper">
      <img src=${this.imgSrc} alt=${this.alt} />
    </div>`;
  }
}
