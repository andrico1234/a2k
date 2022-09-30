import { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import "./a2k-button";

const Template: Story = (args) => {
  return html`<a2k-button
    type=${args.type}
    size=${args.size}
    .disabled=${args.disabled}
    >${args.label}</a2k-button
  >`;
};

export const Default = Template.bind({});

Default.args = {
  label: "Hey there",
  disabled: false,
  type: "button",
  size: "medium",
};

export default {
  title: "Button",
  argTypes: {
    type: {
      options: ["button", "submit", "reset"],
      control: { type: "radio" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
  },
} as Meta;
