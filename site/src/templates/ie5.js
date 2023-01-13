import { css, html, LitElement } from "lit";
import "./advert";
import "./static-advert";

const advert1 = new URL("../images/cali-skills-ad.gif", import.meta.url).href;
const advert2 = new URL("../images/coding-tips-and-tricks.gif", import.meta.url)
  .href;
const advert3 = new URL("../images/stream-songs.gif", import.meta.url).href;
const advert4 = new URL("../images/image-1.jpg", import.meta.url).href;
class IE5 extends LitElement {
  static styles = css`
    :host {
      --panel-color-background: white;
      --window-width: 800px;
    }

    .toolbar-row {
      display: flex;
      align-items: center;
      gap: var(--spacing-50);
    }

    .toolbar-row > *:nth-child(2) {
      flex: 1;
    }

    #content {
      position: relative;
    }

    #with-sidebar {
      display: flex;
    }

    #sidebar {
      flex-basis: 10rem;
      flex-grow: 1;
      position: relative;
      display: none;
    }

    #not-sidebar {
      flex-basis: 0;
      flex-grow: 999;
    }

    a2k-stack {
      position: relative;
    }

    a2k-marquee {
      padding: 0;
    }

    img {
      object-fit: cover;
      padding: 0;
      max-width: 100%;
    }

    @media (min-width: 700px) {
      #sidebar {
        display: block;
      }
    }
  `;

  connection = "";

  handleOnline = () => {
    connection = "Online";
  };

  handleOffline = () => {
    connection = "Offline";
  };

  connectedCallback() {
    super.connectedCallback();

    this.addEventListener("online", this.handleOnline);
    this.addEventListener("offline", this.handleOffline);

    this.connection = navigator.onLine ? "Online" : "Offline";
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this.removeEventListener("online", this.handleOnline);
    this.removeEventListener("offline", this.handleOffline);
  }

  render() {
    return html`<a2k-window draggable closeable heading="Internet Explorer 5">
  <a2k-window-toolbar slot="toolbar">
    <a2k-window-toolbar-item>
      <div class="toolbar-row">
        <div>Address</div>
        <a2k-text-field defaultValue="https://www.microsoft.com/internet-explorer"></a2k-text-field>
      </div>
    </a2k-window-toolbar-item>
  </a2k-window-toolbar>

  <a2k-marquee>
    <p slot="text">Internet Explorer has reached end of life. RIP king.</p>
  </a2k-marquee>
  <div id="content">
    <div id="with-sidebar">
      <div id="sidebar">
        <a2k-static-advert href="https://tinyurl.com/4jy5v5ar" alt="cali skills advert" imgSrc=${advert1}>
          </a2k-advert>
      </div>
      <div id="not-sidebar">
        <img src="/images/ie5-splash.png" />
      </div>
    </div>
    <a2k-advert href="https://blog.andri.co" alt="get the latest coding tips and tricks" width="300px" height="300px" imgSrc=${advert2}></a2k-advert>
    <a2k-advert href="https://open.spotify.com/playlist/5IHKvXfvwW94sXOMOZomBy?si=ac5e376cb8ef44a4" alt="stream millions of songs for free" width="125px" height="175px" imgSrc=${advert3}></a2k-advert>
    <a2k-advert alt="hey" width="300px" height="300px" imgSrc=${advert4}></a2k-advert>
  </div>

  <a2k-window-status-bar statusOne="Loaded" statusTwo="${this.connection}" slot="statusbar"></a2k-window-status-bar>
</a2k-window>`;
  }
}

window.customElements.define("a2k-ie5", IE5);
