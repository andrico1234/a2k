import { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import "./a2k-panel";

const Template: Story = () => {
  return html`
    <div style="max-width:600px">
      <a2k-panel>
        <p>This is the panel's internal content</p>
      </a2k-panel>
    </div>
  `;
};

export const Default = Template.bind({});

Default.args = {};

export default {
  title: "Panel",
  argTypes: {},
} as Meta;
