const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

const APP_ROOT_PATH = path.resolve(__dirname, 'src', 'index.tsx')
const BUILD_PATH = path.resolve(__dirname, 'build')

const IS_DEV_MODE = process.env.NODE_ENV !== 'production'

const plugins = [
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.NamedModulesPlugin(),
  new CleanWebpackPlugin(),
]

if (IS_DEV_MODE) {
  plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      APP_ROOT_PATH,
    ],
  },
  mode: IS_DEV_MODE ? 'development' : 'production',
  devtool: IS_DEV_MODE ? 'source-map' : undefined,
  plugins,
  resolve: {
    extensions: ['*', '.js', '.ts', '.tsx'],
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
        test: /\.(t|j)sx?$/,
        include: path.resolve(__dirname, 'src'),
        use:  {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src', 'styles'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: IS_DEV_MODE,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: IS_DEV_MODE,
            }
          },
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
  },
  devServer: IS_DEV_MODE ? {
    contentBase: '/build/',
    hot: true,
    port: 3000,
    proxy: {
      '*': 'http://localhost:5000',
    },
  } : undefined,
}
