// development config
const { merge } = require("webpack-merge");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const commonConfig = require("./common");

module.exports = merge(commonConfig, {
  mode: "development",
  entry: [
    // "react-hot-loader/patch", // activate HMR for React
    // "webpack-dev-server/client?http://localhost:8080", // bundle the client for webpack-dev-server and connect to the provided endpoint
    // "webpack/hot/only-dev-server", // bundle the client for hot reloading, only- means to only hot reload for successful updates
    "./index.tsx", // the entry point of our app
  ],
  optimization: {
    minimize: false,
  },
  output: {
    filename: 'main.js',
    chunkFormat: 'module',
    clean: true,
    globalObject: 'globalThis',
    iife: false,
  },
  watch: true,
  devServer: {
    port: 8090,
    // static: './dist',
    hot: false, // enable HMR on the server
    liveReload: true,
    // historyApiFallback: true, // fixes error 404-ish errors when using react router :see this SO question: https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url 
  },
  devtool: "cheap-module-source-map",
  plugins: [
    // new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new HtmlWebpackPlugin({ template: "index.html.ejs" }),
    new CopyWebpackPlugin({
      patterns: [
      ]
    })
  ],
});
