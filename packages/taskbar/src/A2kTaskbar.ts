import { html, css, LitElement } from "lit";

function getTime() {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();

  const mins = minutes < 10 ? `0${minutes}` : minutes;
  const hrs = hours < 10 ? `0${hours}` : hours;

  return `${hrs}:${mins}`;
}

export class A2kTaskbar extends LitElement {
  static styles = css``;

  render() {
    return html`<div class="taskbar">
      <button>Start</button>
      <div>${getTime()}</div>
    </div>`;
  }
}

// top level container component
// button
// then gap
// then the time bar
