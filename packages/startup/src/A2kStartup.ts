import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { roundNumber } from "@a2000/utilities";
import "@a2000/button/a2k-button.js";
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

    #background {
      background: var(--startup-background);
    }

    #progress-wrapper {
      max-width: var(--startup-progress-bar-width);
      margin: 0 auto;
      width: 100%;
    }

    #standing-by {
      animation: flash 0.5s infinite alternate;
    }

    @keyframes flash {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }
  `;

  private startupTime = 3000;
  private intervalRef: NodeJS.Timer | null = null;
  private currentStep = 0;

  @property({ type: String })
  state = "idle";

  @property({ type: String })
  image = "";

  @property({ type: String })
  footerText = "Copyright Ⓒ 1999-2000. Andricos2000";

  @property()
  messages = messages;

  @property()
  private progress = 0;
  private interval = 50;

  disconnectedCallback() {
    if (this.intervalRef) {
      clearInterval(this.intervalRef);
    }
  }

  handleStart = () => {
    this.state = "loading";
    const body = document.querySelector("body")!;
    body.setAttribute("data-state", "waiting");

    this.beginLoading();
  };

  beginLoading = () => {
    const steps = generateSteps(this.startupTime, this.interval);

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
    }, this.interval);
  };

  render() {
    if (this.state === "idle") {
      return html`
        <div id="background">
          <a2k-cover>
            <div slot="principal">
              <h1 id="standing-by">Standing by...</h1>
              <a2k-button size="large" @click=${this.handleStart}
                >Start</a2k-button
              >
            </div>
            <div slot="footer"></div>
          </a2k-cover>
        </div>
      `;
    }

    return html`
      <div id="background">
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
              <p>${this.footerText}</p>
            </a2k-stack>
          </div>
        </a2k-cover>
      </div>
    `;
  }
}
