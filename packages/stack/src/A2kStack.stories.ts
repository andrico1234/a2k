import { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import "./a2k-stack";

const Template: Story = () => {
  return html`
    <div style="border:1px solid black;max-width:600px">
      <a2k-stack>
        <p>This is a</p>
        <p>Stack of elements</p>
        <p>With margin automatically applied</p>
      </a2k-stack>
    </div>
  `;
};

export const Default = Template.bind({});

Default.args = {};

export default {
  title: "Stack",
  argTypes: {},
} as Meta;
