var path = require('path')
var HtmlwebpackPlugin = require('html-webpack-plugin')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  devServer: {
    port: 3000,
    contentBase: './build',
    progress: true
  },
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: './src/index.html',
      filename: 'template.html',
      // minify: {
      //   removeAttributeQuotes: true,
      //   collapseWhitespace: true
      // },
      hash: true
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      }
    ]
  }
}
