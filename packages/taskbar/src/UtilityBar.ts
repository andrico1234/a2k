import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { ClockController } from "@a2000/utilities";

@customElement("a2k-utility-bar")
export class UtilityBar extends LitElement {
  static styles = css`
    .utility-bar {
      --inset-shadow-padding: 2px;

      display: flex;
      height: 100%;
      box-sizing: border-box;
      align-items: center;
      padding: var(--taskbar-padding);
      padding-left: calc(var(--inset-shadow-padding) + var(--taskbar-padding));
      box-shadow: var(--taskbar-utility-bar-shadow);
    }
  `;

  private clock = new ClockController(this);

  protected render() {
    const formattedTime = timeFormat.format(this.clock.value);
    return html`<div class="utility-bar">${formattedTime}</div>`;
  }
}

const timeFormat = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});
