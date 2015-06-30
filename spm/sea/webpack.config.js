var config = require('./config.json');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    home: [
      'webpack/hot/dev-server',
      './public/js/home/index.js'
    ],
    user: './public/js/user/index.js'
  },
  output: {
    path: './build/assets',
    publicPath: '/assets/',
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
      test: /\.tpl$/,
      loader: 'handlebars-loader'
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }]
  },
  resolve: {
    root: [
      path.join(__dirname, 'spm_modules'),
      path.join(__dirname, 'public', 'js')
    ],
    alias: config.alias
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  devServer: {
    contentBase: './build',
    //quiet: true,
    //colors: true,
    noInfo: true,
    //host: '0.0.0.0',
    //port: '8080',
    inline: true,
    hot: true
  }
};
