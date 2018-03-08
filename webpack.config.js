var webpack = require('webpack');
var path = require('path');
var ROOT_PATH = path.resolve(__dirname);

module.exports = {
  entry: './src/index.js',

  devServer: {
    contentBase: path.join(ROOT_PATH, "build"),
    port: 9000,
    publicPath: "/build/"
  },

  output: {
    path: path.join(ROOT_PATH, './build'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        use: ['style-loader', 'css-loader', 'sass-loader'],
        test: /\.scss$/
      }
    ]
  }
};