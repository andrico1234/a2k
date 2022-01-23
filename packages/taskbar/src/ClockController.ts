import { ReactiveController, ReactiveControllerHost } from "lit";

export class ClockController implements ReactiveController {
  host: ReactiveControllerHost;
  timeout: number;
  intervalId?: number;
  value = new Date();

  constructor(host: ReactiveControllerHost, timeout = 1000) {
    this.host = host;
    this.host.addController(this);
    this.timeout = timeout;
  }

  hostConnected() {
    this.intervalId = setInterval(() => {
      this.value = new Date();
      this.host.requestUpdate();
    }, this.timeout);
  }

  hostDisconnected() {
    clearInterval(this.intervalId);
    this.intervalId = undefined;
  }
}
