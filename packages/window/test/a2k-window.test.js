import { html } from "lit";
import { fixture } from "@open-wc/testing";
import "../lib/src/a2k-window.js";

import "element-internals-polyfill";

describe("A2kWindow", () => {
  it('has a default title "Hey there" and counter 5', async () => {
    await fixture(html`<a2k-window><p>Hey there</p></a2k-window>`);
  });
});
