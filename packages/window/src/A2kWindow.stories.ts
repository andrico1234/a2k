import { Meta, Story } from "@storybook/web-components";
import { html } from "lit-html";
import "./a2k-window";

const Template: Story = (args) => {
  const { draggable, closeable, heading } = args;

  console.log(args, closeable);

  return html`<a2k-window
    ?draggable="${draggable}"
    ?closeable="${closeable}"
    heading=${heading}
  >
    <p>This is some test content</p>
    <p>Add some stuff in between</p>
  </a2k-window>`;
};

export const Default = Template.bind({});

Default.args = {
  draggable: true,
  closeable: true,
  heading: "Andricos2000",
};

export default {
  title: "Window",
  argTypes: {},
} as Meta;
