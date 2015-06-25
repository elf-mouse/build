console.info('plugin');

var main = require('main');

var plugin = {
  test: function() {
    console.log(main.name);
  }
};

module.exports = plugin;
