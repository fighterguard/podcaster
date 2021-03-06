const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  stats: 'minimal',
  devServer: {
    port: 3001,
    contentBase: './dist',
    publicPath: '/',
    historyApiFallback: true
  }
});