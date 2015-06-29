console.info('index');

require('./index.css');
var tpl = require('./data.tpl');
var test = require('./test.html');
var main = require('main');
var plugin = require('plugin');
var Templatable = require('arale-templatable');
var output = Templatable.compile(tpl, {
  list: [{
    name: 'Item 1',
    num: 10
  }, {
    name: 'Item 2',
    num: 20
  }, {
    name: 'Item 3',
    num: 30
  }]
});

main.foo();
plugin.test();

console.log('url', main.url);
console.log(output);
console.log(test);

console.warn(typeof Function.prototype.bind);
