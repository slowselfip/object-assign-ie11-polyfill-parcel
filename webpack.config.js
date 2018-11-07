const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outPath = path.join(__dirname, 'dist');

module.exports = {
  entry: ['./src/index.js'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  output: {
    filename: 'index.js',
    path: outPath,
    publicPath: './'
  },
  plugins: [
    new HtmlWebpackPlugin({
      output: outPath,
      template: path.join(__dirname, 'index-webpack.html')
    }),
  ],
};
