import { css, LitElement, svg } from "lit";
import { property } from "lit/decorators.js";

const url = new URL("../../a2k-icons.svg", import.meta.url).href;

export class A2kIcon extends LitElement {
  static styles = css`
    /* Change this to somehow be the same as the icon it's referencing? */
    #icon {
      font-size: 32px;
    }
  `;

  @property({ type: String })
  icon = "";

  render() {
    if (!this.icon) {
      console.warn(
        "This icon is a missing a 'name', please specify the 'name' of the icon you want to display"
      );
    }

    return svg`
      <svg id="icon" height="1em" width="1em">
        <use href="${url}#${this.icon}"></use>
      </svg>
    `;
  }
}
