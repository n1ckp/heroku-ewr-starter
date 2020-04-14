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

const SRC_PATH = path.resolve(__dirname, 'src')

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
      styles: path.resolve(SRC_PATH, 'styles'),
      img: path.resolve(SRC_PATH, 'img'),
      components: path.resolve(SRC_PATH, 'components'),
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
        include: SRC_PATH,
        use:  {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.scss$/,
        include: SRC_PATH,
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
              sassOptions: {
                includePaths: [
                  path.join(SRC_PATH, 'styles'),
                ],
              },
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
