const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const buildVersion = require('child_process')
  .execSync('git describe --tags --long | tr "\n" "-"')
  .toString()
const buildBranch = require('child_process')
  .execSync('git branch --show-current | tr "\n" "-"')
  .toString()

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/index.tsx'),
  output: {
    path: path.resolve('dist'),
    filename: 'suckless-react-observer.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx']
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: [
      path.join(__dirname, '../demo'),
      path.join(__dirname, '../dist')
    ],
    port: 3000,
    hot: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'suckless intersection observer',
      scriptLoading: 'defer',
      inject: true,
      template: path.resolve(__dirname, '../demo/index.html'),
      filename: path.resolve(__dirname, '../dist/index.html')
    }),
    new webpack.DefinePlugin({
      __BUILD_VERSION: JSON.stringify(buildVersion),
      __BUILD_BRANCH: JSON.stringify(buildBranch)
    })
  ]
}
