const path = require('path');
const { merge } = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = merge(CommonConfig, {
  devServer: {
    publicPath: '/',
    port: 9000,
    contentBase: path.join(process.cwd(), 'dist'), // static file location
    host: 'localhost',
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    noInfo: false,
    stats: 'minimal',
    open: true,
  },
});
