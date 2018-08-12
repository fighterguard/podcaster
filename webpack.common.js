const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const distPath = path.join(__dirname, 'dist');

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    path: distPath,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "env",
              "react"
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: `${ distPath }/index.html`,
      inject: true,
      template: './src/index.html',
      files: {
        css: 'style.css'
      }
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    })]
};
