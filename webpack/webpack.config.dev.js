var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/app'
  ],  
  output: {
    path: path.join(__dirname, '../src/build'),
    filename: 'bundle.js'    
  },  
  devServer: {
    contentBase: './src/build',
    port: 8080,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /(\.css|\.scss)$/,
        loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
      },
      {
          test: /\.(eot|svg|woff|woff2|otf|ttf)$/,
          exclude: /node_modules/,
          loader: 'file-loader',
          options: {
              name: '[path][name].[ext]'
          }
      },
      {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader  : 'file-loader?limit=30000&name=./images/[hash].[ext]'
      }, // inline base64 URLs for <=30k images, direct URLs for the rest
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new webpack.HotModuleReplacementPlugin()    
  ]  
}