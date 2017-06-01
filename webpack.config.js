/*
 * WARNING: Tampering with how entry is populated could affect pattern matching
 */

const fs = require('fs');
const path = require('path');

module.exports = {
  target: 'node',
  entry: './server.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          { loader: 'babel-loader' },
        ],
      },
    ],
  },
  output: {
    path: 'dist',
    filename: '[name]/index.js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    modules: ['node_modules', 'lib'],
  },
};
