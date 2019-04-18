var path = require('path')
var HtmlwebpackPlugin = require('html-webpack-plugin')
var MiniCssExtractPlugin = require('mini-css-extract-plugin')
let webpack = require('webpack')
module.exports = {
  devServer: {
    port: 3000,
    contentBase: './build',
    progress: true
  },
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
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
    }),
    new webpack.ProvidePlugin({
      $: 'jquery'
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-withimg-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: { 
          loader: 'url-loader',
          options: {
            limit: 30 * 1024, // 限制当图片小于30KB时, 将图片转换为base64而不去打包.
            outputPath: '/img/',
            publicPath: 'http://localhost:8080/static',
          }
        }
      },
      {
        test: require.resolve('jquery'),
        use: 'expose-loader?$'
      },
      {
        test: /\.js$/,
        use: {
          loader: 'eslint-loader'
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader', // 这个loader用于把ES6+的新语法转化为ES5
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              ['@babel/plugin-transform-runtime']
            ]
          }
        },
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/
      },
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
