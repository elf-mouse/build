var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    home: [
      'webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/dev-server',
      './public/js/home/index.js'
    ],
    user: './public/js/user/index.js'
  },
  output: {
    path: './build',
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
      loader: "style!css"
    }]
  },
  resolve: {
    root: [
      path.join(__dirname, 'spm_modules'),
      path.join(__dirname, 'public', 'js')
    ],
    alias: {
      jquery: 'jquery/1.11.3/dist/jquery.js',
      main: 'main.js',
      plugin: 'vendor/plugin.js',
      async: 'vendor/async.js'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
    //new webpack.optimize.UglifyJsPlugin()
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
