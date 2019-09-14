const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
  entry: ['react-hot-loader/patch', path.resolve(__dirname, './src/index.ts')],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: isProduction ? 'main.[contenthash].js' : 'main.js',
    chunkFilename: isProduction ? '[name].[contenthash].js' : '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      title: 'Joe Walton - Software Developer',
      template: path.resolve(__dirname, './src/index.html'),
    }),

    new CopyPlugin([{ from: './_redirects' }]),

    new ForkTsCheckerWebpackPlugin(),
  ],
  devServer: {
    compress: true,
    port: 9000,
    hot: true,
    historyApiFallback: true,
  },
};
