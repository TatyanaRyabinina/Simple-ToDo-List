const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/public/index.html',
  filename: './index.html'
});

const jQueryPlugin = new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  Popper: 'popper.js/dist/umd/popper'
});

const path = require('path');

module.exports = {
  output: {
    path: path.resolve('dist'),
    filename: 'bundled.js',
    publicPath: '/'
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
        test: /\.css$/
        //use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [htmlWebpackPlugin, jQueryPlugin]
};
