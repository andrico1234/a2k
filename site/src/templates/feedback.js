import { html, LitElement } from "lit";
import { parseFormAsObject } from "@open-wc/form-helpers";

class Feedback extends LitElement {
  submit(e) {
    e.preventDefault();

    const data = parseFormAsObject(e.target);
    console.log(data);
  }

  render() {
    return html` <a2k-window draggable closeable heading="Share your thoughts">
      <form @submit=${this.submit}>
        <a2k-text-field name="text"></a2k-text-field>
        <a2k-select></a2k-select>
        <button @onsubmit=${this.submit} type="submit">Submit</button>
      </form>
    </a2k-window>`;
  }
}

window.customElements.define("a2k-feedback", Feedback);
