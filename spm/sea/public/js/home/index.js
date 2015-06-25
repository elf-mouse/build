console.info('index');

require('./index.css');
//var tpl = require('./data.tpl');
var main = require('main');
var plugin = require('plugin');

main.foo();
plugin.test();

console.log('url', main.url);
//console.log(tpl);

console.warn(typeof Function.prototype.bind);
