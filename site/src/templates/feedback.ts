import { html, LitElement } from "lit";
import { parseFormAsObject } from "@open-wc/form-helpers";

class Feedback extends LitElement {
  submit(e: SubmitEvent) {
    e.preventDefault();

    const target = e.target as HTMLFormElement;

    const data = parseFormAsObject(target);
    console.log(data);
  }

  click() {
    const form = this.renderRoot.querySelector("form") as HTMLFormElement;
    const duplicatedButton = document.createElement("button");
    duplicatedButton.setAttribute("type", "submit");
    duplicatedButton.hidden = true;

    form.append(duplicatedButton);
    form.requestSubmit(duplicatedButton);
    duplicatedButton.remove();
  }

  render() {
    return html` <a2k-window draggable closeable heading="Share your thoughts">
      <form @submit=${this.submit}>
        <a2k-text-field name="text"></a2k-text-field>
        <a2k-select name="select">
          <option value="one">uno</option>
          <option value="two">dos</option>
          <option value="three">trois</option>
        </a2k-select>
        <a2k-button @click=${this.click} type="submit">Submit</a2k-button>
      </form>
    </a2k-window>`;
  }
}

window.customElements.define("a2k-feedback", Feedback);
