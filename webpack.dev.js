
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'real-name-sdk': './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: 'RealNameSdk',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader'
      },
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, `test/index.html`),
      filename: 'index.html',
      chunks: ['real-name-sdk'],
      inject: false
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    stats: 'errors-only'
  },
  devtool: 'cheap-source-map'
}