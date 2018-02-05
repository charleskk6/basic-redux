// webpack.config.prod.js
var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, '../', 'src/build'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
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
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ] 
}