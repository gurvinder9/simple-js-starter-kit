const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let config =  {
  mode: "development", // default - production
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.jsx?/,
        use:[
          {
            loader: 'babel-loader',
            query : {
              presets : ['babel-preset-es2015', 'react']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          publicPath:'../build/app.css'
        })
      }
    ]
  },
  devtool: 'inline-source-map',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'app.bundle.js'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
    // new ExtractTextPlugin({
    //   fileName: 'app.css',
    //   disable: false,
    //   allChunks: true
    // })
  ],
};

module.exports = config;
