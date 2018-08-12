const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const indexBundle = `${ process.env.NODE_ENV }_bundle.js`;
const distPath = path.join(__dirname, `dist-${ process.env.NODE_ENV }`);

module.exports = merge(common, {
  mode: 'production',
  stats: 'minimal',
  output: {
    filename: indexBundle,
    path: distPath,
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: `${ distPath }/index.html`,
      inject: true,
      template: './src/index.html',
      files: {
        css: 'style.css'
      }
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        sourceMap: false,
        uglifyOptions: {
          compress: {
            inline: false
          }
        }
      })
    ],
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor_app',
          chunks: 'all',
          minChunks: 2
        }
      }
    }
  }
});
