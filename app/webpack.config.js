const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      BROWSER: JSON.stringify(true),
      NODE_ENV: JSON.stringify( process.env.NODE_ENV || 'development')
    }
  }),
  new ExtractTextPlugin('bundle.css')
];

module.exports = {
  entry: "./src/index.js",
  plugins,
  output:{
      path: path.resolve(__dirname, '../server/public'),
      publicPath: '/server/public/',
      filename: "bundle.js"
  },
  module:{
      rules:[
          {
              test: /\.js?$/,
              exclude: /node_modules/,
              loader: "babel-loader"
          },
          {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: "css-loader"
            })
          }
      ]
  },
  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,
  devServer: {
    historyApiFallback: true,
  }
}
