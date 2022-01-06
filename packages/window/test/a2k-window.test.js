import { html } from "lit";
import { fixture, expect } from "@open-wc/testing";
import "../lib/src/a2k-window.js";

describe("A2kWindow", () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture(html`<a2k-window><p>Hey there</p></a2k-window>`);
  });
});
