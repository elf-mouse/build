var webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/dev-server',
      './app/main.js'
    ]
  },
  output: {
    path: './build',
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
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
