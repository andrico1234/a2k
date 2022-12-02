import { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import "./a2k-blue-screen";

const Template: Story = (args) => {
  return html`<a2k-blue-screen></a2k-blue-screen>`;
};

export const Default = Template.bind({});

Default.args = {};

export default {
  title: "Blue Screen",
  argTypes: {},
} as Meta;
