var environemnt = process.env.WEBPACK_ENV || process.env.NODE_ENV;
var path = require('path');

var config = require('./config/webpack.' + environemnt+ '.config.js');
config.resolve = {
    alias: {
        config: path.join(__dirname, 'config','config.' + environemnt)
    }
};
module.exports = config;
