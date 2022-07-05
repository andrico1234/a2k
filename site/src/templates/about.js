import { html, LitElement } from "lit";

class About extends LitElement {
  render() {
    return html` <a2k-window draggable closeable heading="About Andricos2000">
      <div>
        <p>Deets coming soon...</p>
      </div>
    </a2k-window>`;
  }
}

window.customElements.define("a2k-about", About);

// content will be something like

// startup music is a reimagining of Magdalena Bay's Mercurial World
// done by me
// work in progress
// a lot more I want to do
// you can follow progress on Twitter
