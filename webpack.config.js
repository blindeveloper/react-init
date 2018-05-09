const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const ISPROD = JSON.parse(process.env.PROD_ENV)
const HtmlWebpackPlugin = require('html-webpack-plugin')

const extractSass = new ExtractTextPlugin({
  filename: "bundle.css",
  disable: process.env.NODE_ENV === "development"
})

module.exports = {
  mode: ISPROD ? 'production' : 'development',
  entry: './src/index.js',
  watch: true,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
            loader: 'babel-loader',
            options: { presets: ['react'] }
          }]
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {loader: "css-loader"}, 
            {loader: "sass-loader"}
          ],
          // use style-loader in development
          fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [
    extractSass,
    new HtmlWebpackPlugin({
      title:'React init',
      template: './src/index.html'
    })
  ]
}