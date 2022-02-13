const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config.base");

module.exports = merge(baseConfig, {
  mode: "development",
  devServer: {
    port: process.env.PORT || 3000,
    hot: true,
  },
  devtool: "source-map",
});
