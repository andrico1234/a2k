import { LitElement, svg } from "lit";

const url = new URL("../../a2k-icons.svg", import.meta.url).href;
// Eventually refactor this so size is computed using 's', 'm', 'l'

export class DocumentsIcon extends LitElement {
  render() {
    return svg`
      <svg class="icon">
        <use href="${url}#documents-icon"></use>
      </svg>
    `;
  }
}
