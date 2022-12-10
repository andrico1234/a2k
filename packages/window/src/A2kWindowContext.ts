import { LitElement, html } from "lit";
import { provide } from "@lit-labs/context";
import { property } from "lit/decorators.js";
import { windowContext, WindowContext } from "./windowContext";

export class A2kWindowContext extends LitElement {
  @provide({ context: windowContext })
  @property({ attribute: false })
  public windowContext: WindowContext = {
    log: (msg) => {
      console.log(`[my-app] ${msg}`);
    },
  };

  protected render() {
    return html`<div></div>`;
  }
}
