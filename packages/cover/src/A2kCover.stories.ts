import { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import "./a2k-cover";

const Template: Story = (args) => {
  const { elements } = args;

  const hasHeading = elements.includes("heading");
  const hasPrincipal = elements.includes("principal");
  const hasFooter = elements.includes("footer");

  return html`<a2k-cover>
    ${hasHeading ? html`<h1 slot="heading">Demo</h1>` : null}
    ${hasPrincipal ? html`<p slot="principal">Main</p>` : null}
    ${hasFooter ? html`<p slot="footer">Copyright Ⓒ the badass</p>` : null}
  </a2k-cover>`;
};

export const Default = Template.bind({});

Default.args = {
  elements: ["heading", "principal", "footer"],
};

export default {
  title: "Cover",
  argTypes: {
    elements: {
      options: ["heading", "principal", "footer"],
      control: { type: "check" },
    },
  },
} as Meta;
