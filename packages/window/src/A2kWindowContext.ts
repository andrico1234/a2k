import { LitElement, html } from "lit";
import { provide } from "@lit-labs/context";
import { property } from "lit/decorators.js";
import { windowContext, WindowContext } from "./windowContext";

export class A2kWindowContext extends LitElement {
  @provide({ context: windowContext })
  @property({ attribute: false })
  public windowContext: WindowContext = {
    windows: [],
    get count() {
      return this.windows.length;
    },
    registerWindow: (id) => {
      this.windowContext.windows.push({ id });
    },
    unregisterWindow: (id) => {
      const ids = this.windowContext.windows.map(({ id }) => id);
      const indexOfId = ids.indexOf(id);

      if (indexOfId === -1) return;

      this.windowContext.windows.splice(indexOfId, 1);
    },
  };

  protected render() {
    return html`<div>
      <slot></slot>
    </div>`;
  }
}
