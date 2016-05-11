var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/assets');
var NPM_DIR = path.resolve(__dirname, 'node_modules');
var APP_DIR = path.resolve(__dirname, 'src');

var mainConfig = {
  entry: [
    APP_DIR + "/app.js",
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/public/assets/'
  },
  module : {
    loaders: [{
      test: /\.js(x)?/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};

var prodConfig = mainConfig;

var devConfig = {
  devtool: 'eval', // log hot reloading
  entry: mainConfig.entry,
  output: mainConfig.output,
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module : mainConfig.module
};

var isProduction = process.env.NODE_ENV === 'production';
var config;
if(isProduction === true){
  config = prodConfig;
}else{
  devConfig.module.loaders[0].loaders.unshift("react-hot");
  devConfig.entry.unshift(
    NPM_DIR + '/webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    NPM_DIR + '/webpack/hot/only-dev-server' // "only" prevents reload on syntax errors
  );
  config = devConfig;
}

module.exports = config;
