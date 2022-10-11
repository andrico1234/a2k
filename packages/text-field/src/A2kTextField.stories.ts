import { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import "./a2k-text-field";

const Template: Story = (props) => {
  const { defaultValue, name, label } = props;

  return html`
    <a2k-text-field
      name=${name}
      defaultValue=${defaultValue}
      label=${label}
    ></a2k-text-field>
  `;
};

export const Default = Template.bind({});

Default.args = {
  defaultValue: "",
  name: "input",
  label: "Test Field",
};

export default {
  title: "TextField",
  argTypes: {},
  parameters: {
    actions: {
      handles: ["oninput", "onchange"],
    },
  },
} as Meta;
