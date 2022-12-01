import { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import "./a2k-desktop";
import "./a2k-desktop-icon";

const Template: Story = () => {
  return html`
    <div style="height:100vh;background:var(--desktop-background)">
      <a2k-desktop>
        <a2k-desktop-icon
          icon="documents-icon"
          text="Portfolio"
        ></a2k-desktop-icon>
        <a2k-desktop-icon
          icon="network-icon"
          text="Send Feedback"
        ></a2k-desktop-icon>
        <a2k-desktop-icon icon="help-icon" text="About"></a2k-desktop-icon>
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
