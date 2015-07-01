var config = require('./config.json');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    home: './public/js/home/index.js',
    user: './public/js/user/index.js'
  },
  output: {
    path: './build',
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }, {
      test: /\.tpl$/,
      loader: 'handlebars-loader'
    }]
  },
  resolve: {
    root: [
      path.join(__dirname, 'spm_modules'),
      path.join(__dirname, 'public/js')
    ],
    alias: config.alias
  },
  plugins: [
    //new webpack.optimize.UglifyJsPlugin()
  ]
};
