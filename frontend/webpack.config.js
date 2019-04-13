const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

const APP_ROOT_PATH = path.resolve(__dirname, 'src', 'index.js')
const BUILD_PATH = path.resolve(__dirname, 'build')

let buildConfig = {
  entry: {
    app: [
      'babel-polyfill',
      APP_ROOT_PATH,
    ],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    extensions: ['*', '.js'],
    alias: {
      styles: path.resolve(__dirname, 'src', 'styles'),
      img: path.resolve(__dirname, 'src', 'img'),
      components: path.resolve(__dirname, 'src', 'components'),
    }
  },
  output: {
    filename: '[name].bundle.js',
    path: BUILD_PATH,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        use:  {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/preset-react'],
          },
        }
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src', 'styles'),
        use: [
          'style-loader',
          {loader: 'css-loader', options: {modules: true}},
          'sass-loader',
        ]
      },
      {
        test: /\.svg/,
        include: path.resolve(__dirname, 'src'),
        loader: 'react-svg-loader',
      },
      {
        test: /\.(png|gif|jpg|ttf|woff|eot)/,
        include: path.resolve(__dirname, 'src', 'img'),
        loader: 'url-loader',
      }
    ]
  }
}

if (process.env.NODE_ENV === 'production') {
  buildConfig.mode = 'production'
}
else if (process.env.NODE_ENV === 'development') {
  buildConfig.mode = 'development'
  buildConfig.devtool = 'source-map'
  buildConfig.devServer = {
    contentBase: '/build/',
    hot: true,
    port: 3000,
    proxy: {
      '*': 'http://localhost:5000',
    },
  }
  buildConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = buildConfig
