// production config
const { merge } = require("webpack-merge");
const { resolve } = require("path");

const commonConfig = require("./common");

module.exports = merge(commonConfig, {
  mode: "production",
  entry: "./index.tsx",
  output: {
    filename: "main.js",
    path: resolve(__dirname, "../../dist"),
    publicPath: "/",
    chunkFormat: 'module',
    iife: false,
  },
  devtool: "source-map",
  plugins: [],
  optimization: {
    minimize: false,
  },
});
