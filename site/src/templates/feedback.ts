import { html, LitElement } from "lit";
import { parseFormAsObject } from "@open-wc/form-helpers";

const githubUrl = "https://github.com/andrico1234/a2k";
const twitterUrl = "https://twitter.com/andricokaroulla";

const featureChildren = () => {
  return html` <a2k-text-field label="ideas" name="text"></a2k-text-field> `;
};

const problemChildren = () => {
  return html` <a2k-text-field label="issues" name="text"></a2k-text-field> `;
};

const hireChildren = () => {
  return html`
    <a2k-text-field label="your email" name="text"></a2k-text-field>
  `;
};

const supportChildren = () => {
  return html`
    <div>
      <p>
        Thanks! You can show your support by giving
        <a href="${githubUrl}">A2k</a> a star on GitHub.
      </p>
      <p>
        You can also follow me on <a href="${twitterUrl}">Twitter</a> to follow
        progress.
      </p>
    </div>
  `;
};

const elements = {
  feature: featureChildren,
  problem: problemChildren,
  hire: hireChildren,
  support: supportChildren,
};

class Feedback extends LitElement {
  submit(e: SubmitEvent) {
    e.preventDefault();

    const target = e.target as HTMLFormElement;

    const data = parseFormAsObject(target);
    console.log(data);
  }

  render() {
    return html` <a2k-window draggable closeable heading="Share your thoughts">
      <form @submit=${this.submit}>
        <a2k-select
          label="Reason"
          name="select"
          placeholder="I would like to..."
        >
          <option value="feature">Suggest a feature</option>
          <option value="problem">Report a problem</option>
          <option value="hire">Hire Andrico</option>
          <option value="support">Show support for A2k</option>
        </a2k-select>

        <a2k-text-field name="text"></a2k-text-field>
        <a2k-button type="submit">Submit</a2k-button>
      </form>
    </a2k-window>`;
  }
}

window.customElements.define("a2k-feedback", Feedback);
