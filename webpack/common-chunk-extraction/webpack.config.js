var path = require('path');
var webpack = require('webpack');
var appPath = path.resolve(__dirname, 'app', 'js');
var distPath = path.resolve(__dirname, 'dist', 'js');

module.exports = {
  entry: {
    home: path.resolve(appPath, 'home', 'home.js'),
    admin: path.resolve(appPath, 'admin', 'admin.js')
  },
  output: {
    path: distPath,
    filename: '[name]Bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
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
    )
  ]
};
