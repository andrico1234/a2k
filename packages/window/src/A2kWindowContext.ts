import { LitElement, html } from "lit";
import { provide } from "@lit-labs/context";
import { property } from "lit/decorators.js";
import { windowContext, WindowContext } from "./windowContext";

// how do I store windows?
// currently we store by id.

// we need to create a new window object
// id last interacted with. date.now()

export class A2kWindowContext extends LitElement {
  @provide({ context: windowContext })
  @property({ attribute: false })
  public windowContext: WindowContext = {
    version: 0,
    windows: {},
    get windowsList() {
      return Object.values(this.windows);
    },
    get count() {
      return Object.keys(this.windows).length;
    },
    registerWindow: (id, options) => {
      const { hasAutoPosition = true } = options;

      const lastInteractionTime = Date.now();
      const newWindow = { id, lastInteractionTime, hasAutoPosition };
      this.windowContext.windows[id] = newWindow;
      this.windowContext.version += 1;
    },
    unregisterWindow: (id) => {
      delete this.windowContext.windows[id];
      this.windowContext.version += 1;
    },
    handleInteraction: (id) => {
      console.log("hey there");
      const window = this.windowContext.windows[id];

      if (!window) return;
      const lastInteractionTime = Date.now();

      this.windowContext.windows[id].lastInteractionTime = lastInteractionTime;
      this.windowContext.version += 1;
      this.requestUpdate();
    },
  };

  protected render() {
    return html`<div>
      <slot></slot>
    </div>`;
  }
}
