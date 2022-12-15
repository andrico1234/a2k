const glob = require("glob");
const fs = require("fs");

fs.cpSync(
  "./packages/icons/a2k-icons.svg",
  "./.storybook/static/packages/icons/a2k-icons.svg"
);

const stories = glob.sync("packages/**/*.stories.js").map((x) => {
  return `../${x}`;
});

const generateIconNames = require("../scripts/generateIconNames");

generateIconNames();

module.exports = {
  stories,
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "webpack5",
  },
  framework: "@storybook/web-components",
  features: {
    storyStoreV7: true,
  },
  // Due to a2k-icons. Static assets are relative to the root, so we need to
  // let Storybook now where are our static assets are.
  staticDirs: ["./static"],
};
