const path = require('path')
const autoprefixer = require('autoprefixer')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCSS = new ExtractTextPlugin({ filename: 'styles.css' })

module.exports = {
  entry: [
    'babel-polyfill',
    './app/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'app.min.js'
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env',
              'stage-2',
              'react'
            ]
          }
        }
      },
      {
        test: /\.(sass|scss|css)/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            },            
            {
              loader: 'resolve-url-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: loader => {
                  require('autoprefixer')
                },
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /\.(png|jpg|gif|ogg)$/,
        exclude: /(node_modules)/,
        use: { 
          loader: 'file-loader'
        }
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: { 
          loader: 'file-loader'
        }
      },
    ]
  },
  plugins: [
    extractCSS
  ],
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  }
}