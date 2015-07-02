var config = require('./config.json');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './public/js/home/index.js',
  output: {
    path: './assets/js/home',
    publicPath: '/assets/js/home/',
    filename: '[name].index.js'
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
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
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
