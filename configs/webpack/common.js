// shared config (dev and prod)
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  context: resolve(__dirname, '../../src'),
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.tsx?$/],
        use: ['babel-loader'],
        // exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['@quickgl/lvgl-style-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader?hash=sha512&digest=hex&name=img/[contenthash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
        ],
      },
    ],
  },
  // plugins: [new HtmlWebpackPlugin({ template: "index.html.ejs" })],
  plugins: [new webpack.ProgressPlugin({})],
  // externals: {
  //   react: "React",
  //   "react-dom": "ReactDOM",
  // },
  performance: {
    hints: false,
  },
};
