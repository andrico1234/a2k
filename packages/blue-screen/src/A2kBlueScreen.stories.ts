import { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import "./a2k-blue-screen";

const Template: Story = (args) => {
  return html`<a2k-blue-screen>
    <p>${args.line1}</p>
    <p>${args.line2}</p>
  </a2k-blue-screen>`;
};

export const Default = Template.bind({});

Default.args = {
  line1:
    "An error has occurred and Andricos2000 has been shut down to prevent damage to your computer.",
  line2:
    "Please try and restart Andricos2000 by pressing Ctrl+Alt+Delete (or CTRL+R).",
};

export default {
  title: "Blue Screen",
  argTypes: {},
} as Meta;
