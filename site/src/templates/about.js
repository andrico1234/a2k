import { css, html, LitElement } from "lit";

class About extends LitElement {
  static styles = css`
    p {
      margin: 0;
    }
  `;

  render() {
    return html` <a2k-window draggable closeable heading="About Andricos2000">
      <p>
        Andricos2000 is a free-to-use UI library inspired by the
        turn-of-the-millenium era of computing. It's a work in progress, so you
        can follow me on
        <a href="https://twitter.com/andricokaroulla" target="_blank"
          >Twitter</a
        >
        for updates.
      </p>
      <p>It's built by Andrico Karoulla (pictured below).</p>
      <p>
        If you'd like to use Andricos2000 in your own projects, then jump on
        over to our
        <a href="https://github.com/andrico1234/a2k" target="_blank">GitHub</a>.
      </p>
      <h2>Credits</h2>
      <p>
        The startup music is a reimagining of Madgalena Bay's
        <a
          href="https://www.youtube.com/watch?v=SLdCV3nIiEI"
          target="_blank"
          rel="noreferrer noopener"
          >Mercurial World
        </a>
      </p>
    </a2k-window>`;
  }
}

window.customElements.define("a2k-about", About);
