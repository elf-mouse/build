console.info('async');

var $ = require('jquery');

var $demo = $('#demo');

function getWinSize() {
  console.warn('getWinSize');
  console.log($(window).width());
  $demo.html('width: ' + $(window).width());
}

function init() {
  console.info('async run');

  $(window).on('resize', getWinSize);

  getWinSize();
}

init();
