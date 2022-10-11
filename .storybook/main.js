const glob = require("glob");

const stories = glob.sync("packages/**/*.stories.js").map((x) => {
  return `../${x}`;
});

const generateIconNames = require("../scripts/generateIconNames");

generateIconNames();

module.exports = {
  stories,
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-anima",
  ],
  // Webpack 4 didn't recognise package.json exports well, so let's use Webpack 5
  core: {
    builder: "webpack5",
  },
  framework: "@storybook/web-components",
  features: {
    storyStoreV7: true,
  },
  // Due to a2k-icons. Static assets are relative to the root, so we need to
  // let Storybook now where are our static assets are.
  // TODO: automatically generate this file
  staticDirs: ["./static"],
  // To allow webpack to import svgs
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
