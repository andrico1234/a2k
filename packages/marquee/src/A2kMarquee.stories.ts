import { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import "./a2k-marquee";

const Template: Story = (args) => {
  return html`
    <div style="max-width: 600px;border:1px solid black;">
      <a2k-marquee><p slot="text">${args.label}</p></a2k-marquee>
    </div>
  `;
};

export const Default = Template.bind({});

Default.args = {
  label: "Hey there",
};

export default {
  title: "Marquee",
  argTypes: {},
} as Meta;
