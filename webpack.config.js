const { watch } = require('fs');
const path = require('path');

module.exports = [
  {
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'test.bundle.js'
    },
    name: 'test',
    entry: './src/scripts/test.js',
    mode: 'development'
  },
  {
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.bundle.js'
    },
    name: 'index',
    entry: './src/scripts/index.js',
    mode: 'development'
  }
];