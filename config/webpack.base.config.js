var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, '../public/assets');
var NPM_DIR = path.resolve(__dirname, '../node_modules');
var APP_DIR = path.resolve(__dirname, '../src/view');

// generic configuration
module.exports = {
  entry: [
    NPM_DIR + "/jquery/dist/jquery.min.js",
    NPM_DIR + "/marked/marked.min.js",
    APP_DIR + "/app.js", // main app code
  ],
  output: {
    path: BUILD_DIR, // output directory for bundle.js
    filename: 'bundle.js', // output file name
    publicPath: '../public/assets/' // output directory for hot react changes json files
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
    // Enables Hot Module Replacement
    // Generates Hot Update Chunks of each chunk in the records
    // Check https://github.com/webpack/docs/wiki/list-of-plugins#hotmodulereplacementplugin
  ],
  module : {
    loaders: [{
      test: /\.js(x)?/, // check all files with js or jsx format
      loaders: ['babel'],
      // babel used as next generation javascript compiler using set presets in .babelrc [es2015 and react presets]
      // es2015 preset or ECMAScript 2015 is the newest version of the ECMAScript standard, check https://babeljs.io/docs/learn-es2015/
      // react preset strip flow types and transform JSX into createElement calls
      include: path.join(__dirname, '../src') // check all files at this directory
    }]
  }
};
