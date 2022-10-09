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
  // Webpack 4 didn't recognise package.json exports well
  core: {
    builder: "webpack5",
  },
  framework: "@storybook/web-components",
  features: {
    storyStoreV7: true,
  },
  // Due to a2k-icons. Static assets are relative to the root, so we need to
  // let Storybook now where are our static assets are.
  staticDirs: ["../"],
  // To allow webpack to import svgs
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
