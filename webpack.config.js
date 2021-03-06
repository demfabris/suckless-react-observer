const path = require('path')
const webpack = require('webpack')

const buildVersion = require('child_process')
  .execSync('git describe --tags --long | tr "\n" "-"')
  .toString()
const buildBranch = require('child_process')
  .execSync('git branch --show-current | tr "\n" "-"')
  .toString()

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, './src/index.tsx'),
  output: {
    path: path.resolve('dist'),
    filename: 'suckless-react-observer.js'
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx']
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
    new webpack.DefinePlugin({
      __BUILD_VERSION: JSON.stringify(buildVersion),
      __BUILD_BRANCH: JSON.stringify(buildBranch)
    })
  ]
}
