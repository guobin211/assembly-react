const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 8088,
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.NamedChunksPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})
