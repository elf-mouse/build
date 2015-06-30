console.info('main');

var url = require('./config/url.js');

var main = {
  name: 'hello world',
  foo: function(msg) {
    msg = msg || 'gg';
    console.log(msg);
  }
};

if (location.href.indexOf('?debug') > -1) {
  // for dev by seajs
  //require.async('async');

  // for build
  require.ensure([], function() {
    require('async');
  });
}

module.exports = main;
module.exports.url = url;
