var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, 'demo-react.com', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://demo-react.com:3000/');
});
