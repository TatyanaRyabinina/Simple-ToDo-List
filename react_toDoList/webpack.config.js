const HtmlWebPackPlugin = require('html-webpack-plugin');
// const React = require('react');
// const createReactClass = require("create-react-class");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/public/index.html',
  filename: './index.html'
});

const path = require('path');

module.exports = {
  output: {
    path: path.resolve('dist'),
    filename: 'bundled.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [htmlWebpackPlugin]
};
