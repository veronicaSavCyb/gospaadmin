/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, 'public'), // Ensure static files are served correctly
    },
    port: 3100,
    client: {
      overlay: false,
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Security-Policy":
        "default-src 'self'; " +
        "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
        "style-src 'self' 'unsafe-inline' http://localhost:3100; " +
        "font-src 'self' data: http://localhost:3100; " +
        "img-src 'self' data: http://localhost:3100;",
    },
  },
  watchOptions: {
    poll: 1000, // Poll every second to check for file changes
    aggregateTimeout: 300, // Delay rebuilds slightly to optimize performance
    ignored: /node_modules/, // Ignore node_modules to reduce file watchers
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|png|svg|ttf|woff|woff2|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]',
        },
      },
      {
        test: /\.(less|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              lessOptions: {
                javascriptEnabled: true
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'GoSpa Admin',
      filename: 'index.html',
      template: './src/index.html',
      inject: true,
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};
