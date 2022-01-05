export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  watch: true,
  /** Resolve bare module imports */
  // rootDir: "../",
  appIndex: "./_site/index.html",
  nodeResolve: true
});
