const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
// const jquery = require('jquery');

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
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader' // inject CSS to page
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS modules
          },
          {
            loader: 'postcss-loader', // Run post css actions
            options: {
              plugins: function() {
                // post css plugins, can be exported to postcss.config.js
                return [precss, autoprefixer];
              }
            }
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [htmlWebpackPlugin, jQueryPlugin]
};
