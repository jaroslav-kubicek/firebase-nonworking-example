
const webpack = require('webpack');

const config = {
  entry: './app.js',
  output: {
    filename: 'build/content.js',
    path: __dirname,
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Check for all js files
        loader: 'babel-loader',
        query: {
          babelrc: true,
        },
      },
    ],
  },
};

module.exports = config;
