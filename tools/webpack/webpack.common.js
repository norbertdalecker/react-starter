const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin');
const StyleLintWebpackPlugin = require('stylelint-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const manifest = require('../../src/assets/manifest.json');

const babelConfig = require('../babel/babel.config');
const { paths } = require('../config');

module.exports = {
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
  },
  entry: ['@babel/polyfill', paths.srcIndex],
  output: {
    path: paths.build
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all'
        }
      }
    }
  },
  node: {
    fs: "empty",
    tls: "empty",
    net: "empty"
 },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: [paths.src, 'node_modules'],
    symlinks: false
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'cache-loader',
          'thread-loader',
          {
            loader: 'babel-loader',
            options: babelConfig
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/i,
        use: 'file-loader'
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: ['file-loader', 'image-webpack-loader'],
        enforce: 'pre'
      },
      {
        test: /\.svg$/i,
        use: 'url-loader'
      }
    ]
  },
  plugins: [
    new SimpleProgressWebpackPlugin(),
    new CopyWebpackPlugin([{ from: paths.static }, { from: paths.manifest }]),
    new HtmlWebpackPlugin({
      inject: false,
      title: manifest.name,
      template: paths.indexHtml,
      minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    new ForkTsCheckerWebpackPlugin({
      tslint: true,
      logger: {
        info() {},
        warn: console.warn,
        error: console.error
      }
    }),
    new StyleLintWebpackPlugin(),
    new MomentLocalesPlugin({
      localesToKeep: ['en']
    }),
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: paths.sw,
      swDest: 'sw.js',
      importWorkboxFrom: 'local',
      exclude: [/\.map$/, /^manifest.*\.js(?:on)?$/, 'index.html']
    })
  ]
};
