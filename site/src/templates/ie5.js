import { css, html, LitElement } from "lit";

class IE5 extends LitElement {
  static styles = css`
    :host {
      --panel-color-background: white;
    }

    .toolbar-row {
      display: flex;
      align-items: center;
      gap: var(--spacing-50);
    }

    .toolbar-row > *:nth-child(2) {
      flex: 1;
    }

    a2k-window > a2k-marquee {
      padding: 0;
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
    return html` <a2k-window draggable closeable heading="Internet Explorer 5">
      <a2k-window-toolbar slot="toolbar">
        <a2k-window-toolbar-item>
          <div class="toolbar-row">
            <div>Address</div>
            <a2k-text-field
              defaultValue="https://www.microsoft.com/internet-explorer"
            ></a2k-text-field>
          </div>
        </a2k-window-toolbar-item>
      </a2k-window-toolbar>
      <a2k-marquee>
        <p slot="text">Internet Explorer has reached end of life. RIP king.</p>
      </a2k-marquee>
      <div>
        <a2k-icon icon="info-icon"></a2k-icon>
        <p>Coming soon</p>
      </div>
      <a2k-window-status-bar
        statusOne="Loaded"
        statusTwo="${this.connection}"
        slot="statusbar"
      ></a2k-window-status-bar>
    </a2k-window>`;
  }
}

window.customElements.define("a2k-ie5", IE5);
