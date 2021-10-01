const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  optimization: {
    minimizer: [
      new TerserPlugin({}),
    ],
  },
  rules: [
    {
      loader: "babel-loader",
      exclude: [
        ".storybook",
        "cypress",
        "node_modules",
        "src/__test__",
        "src/stories",
      ],
    },
  ],
};
