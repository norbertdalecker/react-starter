const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin;
const merge = require('webpack-merge');

const { paths } = require('../config');
const postcssConfig = require('../postcss/postcss.dev');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: postcssConfig
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    open: false,
    historyApiFallback: true,
    hot: true,
    host: '0.0.0.0',
    contentBase: paths.build,
    port: 3000,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      children: false,
      modules: false,
      reasons: false,
      warnings: true,
      assets: false,
      version: false
    }
  },
  plugins: [
    new BundleAnalyzerPlugin({
      openAnalyzer: false
    }),
    new HotModuleReplacementPlugin()
  ]
});
