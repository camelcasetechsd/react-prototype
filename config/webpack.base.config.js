require('es6-promise').polyfill();
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

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
    path: BUILD_DIR , // output directory for bundle.js
    filename: 'bundle.js', // output file name
    publicPath: '../public/assets/' // output directory for hot react changes json files
  },
  module : {
    loaders: [
    {
      test: /\.js(x)?/, // check all files with js or jsx format
      loaders: ['babel'],
      // babel used as next generation javascript compiler using set presets in .babelrc [es2015 and react presets]
      // es2015 preset or ECMAScript 2015 is the newest version of the ECMAScript standard, check https://babeljs.io/docs/learn-es2015/
      // react preset strip flow types and transform JSX into createElement calls
      include: path.join(__dirname, '../src') // check all files at this directory
    },
    // In order to use SASS you'll need at least the sass-loader and the css-loader.
    // The css-loader returns a JavaScript string.
    // If you want to import the returned JavaScript string as StyleSheet, you'll also need the style-loader
    {
      test: /\.scss$/,
      // the loaders will be applied from right to left
      loader: ExtractTextPlugin.extract(
        "style", "css!sass" +
        "?includePaths[]=" + NPM_DIR + "/bootstrap-sass/assets/stylesheets/" +
        "&includePaths[]=" + NPM_DIR + "/compass-mixins/lib/" +
        "&includePaths[]=" + APP_DIR
      ),
    },
    // Since bootstrap references icons via the url() statement,
    // The css-loader will try to include these assets into the bundle
    // And will throw an exception otherwise.
    // That's why you'll also need the file-loader
    {
      test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff2?$|\.ttf$|\.eot$/,
      loader: "file"
    },
  ]
  },
  // Use the plugin to output separate css file and specify it's name (and add needed behavior to the compiler)
  plugins: [
      new ExtractTextPlugin("bundle.css", {
            allChunks: true
        })
  ]
};
