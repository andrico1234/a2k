import { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import "./a2k-taskbar";

const Template: Story = (props) => {
  return html`
    <div style="height:300px;display:grid">
      <div style="margin-top:auto;">
        <a2k-taskbar></a2k-taskbar>
      </div>
    </div>
  `;
};

export const Default = Template.bind({});

Default.args = {};

export default {
  title: "Taskbar",
  argTypes: {},
} as Meta;
