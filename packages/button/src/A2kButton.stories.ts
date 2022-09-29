import { Meta } from "@storybook/web-components";
import { html } from "lit-html";
import "./a2k-button";

export default {
  title: "Button",
} as Meta;

export const Primary = () => html`<a2k-button>Hey there</a2k-button>`;
