const fs = require("fs/promises");

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("../packages");

  eleventyConfig.on("eleventy.beforeWatch", async (changedFiles) => {
    const file = await fs.readFile(
      "../node_modules/@a2000/styles/a2k-styles.css"
    );

    fs.copyFile(
      "../node_modules/@a2000/styles/a2k-styles.css",
      "./src/a2k-styles.css"
    );
  });
};
