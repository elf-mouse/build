var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = {
  appPath: path.resolve(__dirname, 'app', 'js'),
  distPath: path.resolve(__dirname, 'dist', 'assets')
};

module.exports = {
  entry: {
    home: path.resolve(config.appPath, 'home', 'home.js'),
    admin: path.resolve(config.appPath, 'admin', 'admin.js')
  },
  output: {
    path: config.distPath,
    publicPath: 'http://localhost:8080/',
    filename: '[name]Bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css-loader!sass-loader') // not work :(
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    }]
  },
  resolve: {
    root: [
      path.join(__dirname, 'bower_components'),
      path.join(__dirname, 'app', 'js')
    ],
    alias: {
      utils: 'common/utils.js'
    }
  },
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    ),
    //new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('[name].css', {
        allChunks: true
    })
  ]
};
