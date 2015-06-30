console.info('index');

require('./index.css');
var tpl = require('./data.tpl');
var test = require('./test.html');
var $ = require('jquery');
var main = require('main');
var plugin = require('plugin');
var Templatable = require('arale-templatable');
var list = [{
  name: 'Item 1',
  num: 10
}, {
  name: 'Item 2',
  num: 20
}, {
  name: 'Item 3',
  num: 30
}, {
  name: 'Item 4',
  num: 40
}];
var output = Templatable.compile(tpl, {
  list: list
});

main.foo();
plugin.test();

console.log('url', main.url);
console.log(output);
console.log(test);

$('#test').on('click', function() {
  var min = 1;
  var max = 4;
  var len = Math.floor(Math.random() * (max - min + 1)) + min;
  var arr = [];
  for (var i = min; i <= len; i++) {
    arr.push(list[i - 1]);
  }
  console.log(len);
  $('#demo').html(Templatable.compile(tpl, {
    list: arr
  }));
});

console.warn(typeof Function.prototype.bind);
