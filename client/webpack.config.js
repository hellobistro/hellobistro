// Require dependencies
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'client', 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'HelloBistro',
      template: path.join(__dirname, 'src', 'template.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

module.exports = config;
