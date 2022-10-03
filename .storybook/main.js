module.exports = {
  stories: [
    "../packages/button/lib/src/*.stories.js",
    "../packages/cover/lib/src/*.stories.js",
    "../packages/desktop/lib/src/*.stories.js",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-anima",
  ],
  framework: "@storybook/web-components",
  features: {
    storyStoreV7: true,
  },
};
