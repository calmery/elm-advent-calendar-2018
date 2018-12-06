const HtmlWebpackPlugin = require("html-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  entry: `${__dirname}/src/entry.js`,
  mode: process.env.NODE_ENV || "development",
  devtool: isProduction ? false : "source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: ["raw-loader", "sass-loader"]
      },
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: {
          loader: "elm-webpack-loader",
          options: {
            verbose: true,
            optimize: isProduction
          }
        }
      }
    ]
  },
  output: {
    path: `${__dirname}/build/`,
    filename: "index.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      minify: {
        collapseWhitespace: isProduction
      }
    }),
    new WriteFilePlugin()
  ]
};
