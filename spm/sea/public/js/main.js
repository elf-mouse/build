console.info('main');

var url = require('./config/url.js');
var async = require('async');

var main = {
  name: 'hello world',
  foo: function(msg) {
    msg = msg || 'gg';
    console.log(msg);
  }
};

if (location.href.indexOf('?debug')) {
  //require.async('async');
  async();
}

module.exports = main;
module.exports.url = url;
