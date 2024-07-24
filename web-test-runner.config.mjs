import { playwrightLauncher } from "@web/test-runner-playwright";

const filteredLogs = ["Running in dev mode", "lit-html is in dev mode"];

export default /** @type {import("@web/test-runner").TestRunnerConfig} */ ({
  files: ["packages/*/test/*.test.js", "!**/node_modules/**/*"],
  coverage: true,
  coverageConfig: {
    report: true,
    reportDir: "coverage",
  },

  /** Resolve bare module imports */
  nodeResolve: {
    exportConditions: ["browser", "development"],
  },
  testFramework: {
    config: {
      timeout: "3000",
    },
  },

  /** Filter out lit dev mode logs */
  filterBrowserLogs(log) {
    for (const arg of log.args) {
      if (
        typeof arg === "string" &&
        filteredLogs.some((l) => arg.includes(l))
      ) {
        return false;
      }
    }
    return true;
  },

  /** Amount of browsers to run concurrently */
  // concurrentBrowsers: 2,

  /** Amount of test files per browser to test concurrently */
  // concurrency: 1,

  browsers: [
    playwrightLauncher({ product: "chromium" }),
    playwrightLauncher({ product: "firefox" }),
    // playwrightLauncher({ product: "webkit" }),
  ],
});
