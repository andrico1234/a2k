import { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import "./a2k-startup";

const Template: Story = () => {
  return html` <a2k-startup></a2k-startup> `;
};

export const Default = Template.bind({});

Default.args = {};

export default {
  title: "Startup",
  argTypes: {},
  parameters: {
    actions: {
      handles: ["startup-progress"],
    },
  },
} as Meta;
