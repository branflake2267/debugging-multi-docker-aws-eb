const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // Always set to development mode for this template
  mode: 'development',

  // The page will load this file first
  entry: './index.js',
  
  // Build output lands in the ./dist folder
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
    ],
  },
  
  plugins: [
    // Clean the ./dist directory.
    new CleanWebpackPlugin(),

    // Copy the index.html file to the ./dist directory and put the bundle.js in the index.html. 
    new HtmlWebpackPlugin({
      template: './index.html',
    })
  ],

  devServer: {
    hot: true,
    //open: 'Google Chrome',
    contentBase: path.join(__dirname, 'dist'),
    port: 8080,
    proxy: {
      // This makes it easy to use the web-pack-server configuration with a backend server
      "/api": "http://localhost:3000"
    }
  }
};