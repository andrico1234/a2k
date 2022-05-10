import { LitElement, svg } from "lit";

export class GithubIcon extends LitElement {
  render() {
    return svg`
      <svg class="icon">
        <use href="#github-icon"></use>
      </svg>
    `;
  }
}

// H
