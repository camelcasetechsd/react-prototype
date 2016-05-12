var environemnt = process.env.WEBPACK_ENV || process.env.NODE_ENV;

module.exports = require('./config/webpack.' + environemnt+ '.config.js');
