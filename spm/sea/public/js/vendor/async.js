console.info('async');

var $ = require('jquery');

var $body = $('body');

function getWinSize() {
  console.warn('getWinSize');
  console.log($(window).width());
  $body.html('width: ' + $(window).width());
}

function init() {
  console.info('async run');

  $(window).on('resize', getWinSize);

  getWinSize();
}

module.exports = init;
