// Require dependencies
const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
  entry: path.join(__dirname, 'src', 'index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  mode: 'development',
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: 'HelloBistro',
    //   template: path.join(__dirname, 'src', 'template.html'),
    // }),
    new BundleAnalyzerPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          query: {
            presets:[ 'es2015', 'react', 'stage-2' ]
          }
        },
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
};

module.exports = config;
