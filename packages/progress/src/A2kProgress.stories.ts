import { Meta, Story } from "@storybook/web-components";
import { LitElement } from "lit";
import { html } from "lit-html";
import { customElement, property, state } from "lit/decorators.js";
import "@a2000/button/a2k-button.js";
import "./a2k-progress";

@customElement("a2k-progress-story")
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class ProgressStory extends LitElement {
  @property()
  defaultValue = 0;

  @state()
  value = this.defaultValue;

  intervalRef: undefined | NodeJS.Timer = undefined;

  clearCurrentInterval() {
    if (this.intervalRef) {
      clearInterval(this.intervalRef);
    }
  }

  startAutoProgress() {
    this.value = 0;
    this.clearCurrentInterval();

    this.intervalRef = setInterval(() => {
      this.value++;

      if (this.value >= 100) {
        this.clearCurrentInterval();
      }
    }, 50);
  }

  toggleSetting(setting: string) {
    if (setting === "auto") {
      this.startAutoProgress();
    } else if (setting === "fixed") {
      this.clearCurrentInterval();
      this.value = this.defaultValue;
    }
  }

  attributeChangedCallback(
    name: string,
    _old: string | null,
    value: string | null
  ) {
    if (name === "defaultvalue") {
      this.clearCurrentInterval();
      this.value = Number(value);
      this.defaultValue = Number(value);
    }
  }

  render() {
    return html`
      <div>
        <a2k-progress progress=${this.value}></a2k-progress>
        <div>
          <a2k-button @click=${() => this.toggleSetting("auto")}
            >Auto</a2k-button
          >
          <a2k-button @click=${() => this.toggleSetting("fixed")}
            >Fixed</a2k-button
          >
        </div>
      </div>
    `;
  }
}

const Template: Story = (props) => {
  return html`<a2k-progress-story
    defaultValue=${props.progress}
  ></a2k-progress-story>`;
};

export const Default = Template.bind({});

Default.args = {
  progress: 0,
};

export default {
  title: "Progress",
  argTypes: {},
} as Meta;
