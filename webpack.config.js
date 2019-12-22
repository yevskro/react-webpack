const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpg)$/i,
        loader: "url-loader"
      }
    ]
  },
  devServer: {
    hot: true,
    open: true,
    port: 3000,
    proxy: {"/": "http://localhost:5000"},
    contentBase: path.resolve(__dirname, "public"),
    publicPath: "/"
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        inject: true
    })
  ]
};