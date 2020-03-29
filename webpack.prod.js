
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    'real-name-sdk': './src/index.js',
    'real-name-sdk.min': './src/index.js'
  },
  output: {
    filename: '[name].js',
    library: 'RealNameSdk',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  mode: 'none',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
        terserOptions: {
          ie8: true
        }
      })
    ]
  },
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
  }
}