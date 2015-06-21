// Import some Broccoli plugins
var compileSass = require('broccoli-sass');
var filterCoffeeScript = require('broccoli-coffee');
var mergeTrees = require('broccoli-merge-trees');

// Specify the Sass and Coffeescript directories
var sassDir = 'app/scss';
var coffeeDir = 'app/coffee';

// Tell Broccoli how we want the assets to be compiled
var styles = compileSass([sassDir], 'app.scss', 'app.css');
var scripts = filterCoffeeScript(coffeeDir);

// Merge the compiled styles and scripts into one output directory.
module.exports = mergeTrees([styles, scripts]);
