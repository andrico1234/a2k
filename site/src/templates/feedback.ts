import { css, html, LitElement, TemplateResult } from "lit";
import { parseFormAsObject } from "@open-wc/form-helpers";
import { query, state } from "lit/decorators.js";

const githubUrl = "https://github.com/andrico1234/a2k";
const twitterUrl = "https://twitter.com/andricokaroulla";

const feedbackChildren = () => {
  return html`
    <a2k-text-field
      label="Feedback"
      placeholder="e.g. it's dope!"
      name="details"
    ></a2k-text-field>
  `;
};
const featureChildren = () => {
  return html`
    <a2k-text-field
      label="Ideas"
      placeholder="e.g. more easter eggs"
      name="details"
    ></a2k-text-field>
  `;
};

const problemChildren = () => {
  return html`
    <a2k-text-field
      label="Issues"
      placeholder="e.g. i'm on Chrome and it's broken"
      name="details"
    ></a2k-text-field>
  `;
};

const hireChildren = () => {
  return html`
    <a2k-text-field
      label="Your email"
      placeholder="e.g. andrico@example.com"
      name="details"
    ></a2k-text-field>
  `;
};

const supportChildren = () => {
  return html`
    <div>
      <p>
        Thanks! You can show your support by giving
        <a href="${githubUrl}">a2k</a> a star on GitHub.
      </p>
      <p>
        You can also follow me on <a href="${twitterUrl}">Twitter</a> to follow
        progress.
      </p>
    </div>
  `;
};

const elements: Record<string, () => TemplateResult> = {
  feature: featureChildren,
  problem: problemChildren,
  hire: hireChildren,
  support: supportChildren,
};

class Feedback extends LitElement {
  static styles = css`
    :host {
      --window-width: 400px;
    }

    #container {
      width: 320px;
    }

    form {
      margin-block: var(--spacing-100);
    }
  `;

  submit(e: SubmitEvent) {
    e.preventDefault();

    const target = e.target as HTMLFormElement;

    const data = parseFormAsObject(target);
    console.log(data);
  }

  @query("form")
  formEl!: HTMLFormElement;

  @state()
  activeContent = "";

  updateActiveContent() {
    const { select } = parseFormAsObject(this.formEl!);

    this.activeContent = select ? select.toString() : "";
  }

  handleFormChange() {
    this.updateActiveContent();
  }

  handleChange() {
    this.updateActiveContent();
  }

  render() {
    const elementToRender = elements[this.activeContent];

    return html`
      <div id="container">
        <a2k-window draggable closeable heading="Share your thoughts">
          <form @submit=${this.submit} @change=${this.handleChange}>
            <a2k-stack>
              <a2k-select
                label="Reason"
                name="select"
                placeholder="I would like to..."
              >
                <option value="feature">Suggest a feature</option>
                <option value="problem">Report a problem</option>
                <option value="hire">Hire Andrico</option>
                <option value="support">Show support for a2k</option>
              </a2k-select>

              ${elementToRender ? elementToRender() : feedbackChildren()}
              <a2k-button type="submit">Submit</a2k-button>
            </a2k-stack>
          </form>
        </a2k-window>
      </div>
    `;
  }
}

window.customElements.define("a2k-feedback", Feedback);
