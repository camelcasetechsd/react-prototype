var config = require('./webpack.base.config.js');
var webpack = require('webpack');
var path = require('path');
var NPM_DIR = path.resolve(__dirname, '../node_modules');

config.devtool = 'eval'; // for development all the listening and changes apply to browser in logged in browser console via this tool
config.module.loaders[0].loaders.unshift("react-hot"); // react-hot listen on all changes in files
config.entry.unshift(
  NPM_DIR + '/webpack-dev-server/client?http://0.0.0.0:3000', // load WebpackDevServer client with host and port passed
  NPM_DIR + '/webpack/hot/only-dev-server' // "only" prevents reload on syntax errors
);
config.plugins = [
  new webpack.HotModuleReplacementPlugin()
  // Enables Hot Module Replacement
  // Generates Hot Update Chunks of each chunk in the records
  // Check https://github.com/webpack/docs/wiki/list-of-plugins#hotmodulereplacementplugin
];

module.exports = config;
