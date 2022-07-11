import { html, LitElement } from "lit";

class About extends LitElement {
  render() {
    return html` <a2k-window draggable closeable heading="About Andricos2000">
      <div>
        <p>
          Andricos2000 is a free-to-use UI library inspired by the
          turn-of-the-millenium era of computing. It's a work in progress, so
          follow the A2k Twitter if you want to keep updated.
        </p>
        <p>It's built by Andrico Karoulla (pictured below).</p>
        <p>
          You can use A2k in your own projects, out the GitHub if you'd like to
          use A2k in your own sites
        </p>
        <p>
          The startup music is a reimagining of Madgalena Bay's
          <a
            href="https://www.youtube.com/watch?v=SLdCV3nIiEI"
            target="_blank"
            rel="noreferrer noopener"
            >Mercurial World
          </a>
        </p>
      </div>
    </a2k-window>`;
  }
}

window.customElements.define("a2k-about", About);
