import { Meta, Story } from "@storybook/web-components";
import "@a2000/icon-button/a2k-icon-button.js";
import { html } from "lit-html";
import "./a2k-desktop";

const Template: Story = () => {
  return html`
    <div style="height:100vh;background:var(--desktop-background)">
      <a2k-desktop>
        <a2k-icon-button
          icon="documents-icon"
          text="Portfolio"
        ></a2k-icon-button>
        <a2k-icon-button
          icon="network-icon"
          text="Send Feedback"
        ></a2k-icon-button>
        <a2k-icon-button icon="help-icon" text="About"></a2k-icon-button>
      </a2k-desktop>
    </div>
  `;
};

export const Default = Template.bind({});

Default.args = {};

export default {
  title: "Desktop",
  argTypes: {},
} as Meta;
