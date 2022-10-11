import { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import "./a2k-select";

const Template: Story = () => {
  return html`
    <a2k-select>
      <option value="chrome">Chrome</option>
      <option value="safari">Safari</option>
      <option value="firefox">Firefox</option>
    </a2k-select>
  `;
};

export const Default = Template.bind({});

Default.args = {
  label: "Label",
  placeholder: "Choose an browser",
};

export default {
  title: "Select",
  argTypes: {},
} as Meta;
