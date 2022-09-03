import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";

export class A2kWindowStatusBar extends LitElement {
  static styles = css`
    * {
      box-sizing: border-box;
      margin: 0;
    }

    #separator {
      border: var(--border-width) solid var(--color-gray-700);
    }

    #content {
      background: var(--color-gray-550);
      display: flex;
    }

    .section {
      border: var(--border-medium);
      border-bottom-color: white;
      border-right-color: white;
      padding: 0 var(--spacing-50);
    }

    .section-separator {
      border-right: var(--border-width) solid var(--color-gray-700);
    }

    .section:first-child {
      flex: 1;
    }
  `;

  @property({ type: String })
  statusOne = "";

  @property({ type: String })
  statusTwo = "";

  render() {
    return html`
      <div id="separator"></div>
      <div id="content">
        <div class="section">
          <p>${this.statusOne}</p>
        </div>

        ${this.statusTwo
          ? html` <div class="section-separator"></div>
              <div class="section"><p>${this.statusTwo}</p></div>`
          : null}
      </div>
    `;
  }
}
