const { mergeConfig } = require("vite");
const viteConfig = require("../packages/renderer/vite.config");

module.exports = {
  stories: [
    "../packages/renderer/**/*.stories.mdx",
    "../packages/renderer/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  staticDirs: ["./public"],
  viteFinal: async (config) => {
    // return the customized config
    return mergeConfig(config, {
      root: viteConfig.root,
      resolve: viteConfig.resolve,
    });
  },
};
