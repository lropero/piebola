const CopyPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const path = require('path')

const { name } = require('./package.json')

module.exports = {
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.jsx?$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: '@svgr/webpack'
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          flatten: true,
          from: 'public/**/*'
        }
      ]
    }),
    new Dotenv()
  ],
  resolve: {
    alias: {
      [name]: path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.jsx']
  }
}
