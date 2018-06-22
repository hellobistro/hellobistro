// Require dependencies
const path = require('path');
const webpack = require('webpack');

const config = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          query: {
            compact: false,
            presets: ['es2015', 'react', 'stage-2'],
          },
        },
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = config;
