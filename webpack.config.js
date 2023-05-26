const { watch } = require('fs');
const path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  devServer: {
    port: 33000,
    hot: true,
    static: {
        directory: path.resolve(__dirname),
        publicPath: '/',
        watch: true
    }
  }
};