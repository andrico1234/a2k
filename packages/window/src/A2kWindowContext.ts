import { LitElement, html } from "lit";
import { provide } from "@lit-labs/context";
import { property } from "lit/decorators.js";
import { windowContext, WindowContext } from "./windowContext";

export class A2kWindowContext extends LitElement {
  @provide({ context: windowContext })
  @property({ attribute: false })
  public windowContext: WindowContext = {
    windows: {},
    get windowsList() {
      return Object.values(this.windows);
    },
    get windowOrder() {
      const sortedList = this.windowsList.sort(
        (a, b) => a.lastInteractionTime - b.lastInteractionTime
      );
      const windowIds = sortedList.map(({ id }) => id);

      return windowIds;
    },
    get count() {
      return Object.keys(this.windows).length;
    },
    registerWindow: (id, options) => {
      const { hasAutoPosition = true } = options;

      const lastInteractionTime = Date.now();
      const newWindow = { id, lastInteractionTime, hasAutoPosition, el: null };
      this.windowContext.windows[id] = newWindow;
      this.windowContext.triggerUpdate();
    },
    unregisterWindow: (id) => {
      delete this.windowContext.windows[id];
      this.windowContext.triggerUpdate();
    },
    handleInteraction: (id) => {
      const window = this.windowContext.windows[id];

      if (!window) return;
      const lastInteractionTime = Date.now();

      this.windowContext.windows[id].lastInteractionTime = lastInteractionTime;
      this.windowContext.triggerUpdate();
    },
    triggerUpdate: () => {
      const clone3 = shallowClone(this.windowContext);
      this.windowContext = clone3;
    },
  };

  protected render() {
    return html`<div>
      <slot></slot>
    </div>`;
  }
}

function shallowClone<T>(obj: T): T {
  return Object.create(
    Object.getPrototypeOf(obj),
    Object.getOwnPropertyDescriptors(obj)
  );
}
