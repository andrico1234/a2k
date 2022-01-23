import { rollupPluginHTML as html } from "@web/rollup-plugin-html";

export default {
  input: "index.html",
  output: { dir: "dist", format: "es" },
  plugins: [html()],
};
