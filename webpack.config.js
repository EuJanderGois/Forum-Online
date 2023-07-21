const { watch } = require('fs');
const path = require('path');

module.exports = [
  {
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.bundle.js'
    },
    name: 'app',
    entry: './src/scripts/app.js',
    mode: 'production'
  }
];