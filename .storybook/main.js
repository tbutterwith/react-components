module.exports = {
  stories: [
    "../packages/**/*.stories.mdx",
    "../packages/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-essentials", "@storybook/addon-controls"],
  babel: async (options) => ({
    ...options,
    presets: [require.resolve("babel-preset-react-app")],
  }),
};
