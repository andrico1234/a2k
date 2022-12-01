import { Meta, Story } from "@storybook/web-components";
import { css, LitElement } from "lit";
import { html } from "lit-html";
import { map } from "lit/directives/map.js";
import { customElement } from "lit/decorators.js";

// TODO: Generate these automatically
const cursors = ["default", "pointer", "grab", "grabbing", "wait"];

@customElement("a2k-cursor")
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Cursor extends LitElement {
  static styles = css`
    * {
      margin: 0;
    }

    #wrapper {
      display: flex;
      gap: 8px;
      flex-direction: column;
    }

    .cursor {
      background: var(--button-color-background);
      box-shadow: var(--button-small-shadow);
      padding: var(--spacing-100);
      text-align: center;
      width: 100px;
    }
  `;

  cursorEl = map(cursors, (cursor) => {
    return html`<div class="cursor" style="cursor: var(--cursor-${cursor})">
      <p>${cursor}</p>
    </div>`;
  });

  render() {
    return html` <div id="wrapper">${this.cursorEl}</div>`;
  }
}

const Template: Story = () => {
  return html` <a2k-cursor></a2k-cursor> `;
};

export const Default = Template.bind({});

Default.args = {};

export default {
  title: "Cursors",
  argTypes: {},
} as Meta;
