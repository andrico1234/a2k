import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { roundNumber } from "@a2000/utilities";
import "@a2000/cover/a2k-cover.js";
import "@a2000/stack/a2k-stack.js";
import "@a2000/progress/a2k-progress.js";
import generateSteps from "./generateSteps";

const messages = ["Booting Up..."];

interface ProgressEventDetail {
  progress: number;
  isComplete: boolean;
}

const createProgressEvent = (detail: ProgressEventDetail) =>
  new CustomEvent("startup-progress", {
    bubbles: true,
    composed: true,
    detail,
  });

export class A2kStartup extends LitElement {
  static styles = css`
    :host {
      --progress-unit-background: var(--color-white);

      color: var(--color-white);
      text-align: center;
      font-family: var(--font-primary);
      width: 100%;
    }

    #progress-wrapper {
      max-width: min(600px, 90%);
      margin: 0 auto;
      width: 100%;
    }

    a2k-stack {
      width: 600px;
    }
  `;

  private startupTime = 3000;
  private intervalRef: number | null = null;
  private currentStep = 0;

  @property({ type: String })
  image = "";

  @property({ type: String })
  footerText = "Copyright Ⓒ 1999-2000. Andricos2000";

  @property()
  messages = messages;

  @property()
  private progress = 0;

  connectedCallback() {
    super.connectedCallback();

    const interval = 50;
    const steps = generateSteps(this.startupTime, interval);

    this.intervalRef = setInterval(() => {
      const currentVal = steps[this.currentStep] ?? 0;
      const newProgress = roundNumber(this.progress + currentVal);

      const event = createProgressEvent({
        progress: newProgress,
        isComplete: newProgress >= 100,
      });
      this.dispatchEvent(event);

      if (newProgress >= 100) {
        clearInterval(this.intervalRef!);
        this.progress = 100;
      } else {
        this.progress = newProgress;
        this.currentStep++;
      }
    }, interval);
  }

  disconnectedCallback() {
    if (this.intervalRef) {
      clearInterval(this.intervalRef);
    }
  }

  render() {
    return html`
      <a2k-cover>
        <div slot="principal">
          <h1>Welcome. Andricos2000 is starting up...</h1>
        </div>
        <div slot="footer">
          <a2k-stack>
            <div id="progress-wrapper">
              <a2k-progress progress=${this.progress}></a2k-progress>
            </div>
            <p>${Math.floor(this.progress)}%</p>

            ${this.footerText}
          </a2k-stack>
        </div>
      </a2k-cover>
    `;
  }
}
