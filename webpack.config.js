const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const webpack = require('webpack')

const buildVersion = require('child_process')
  .execSync('git describe --tags --long | tr "\n" "-"')
  .toString()
const buildBranch = require('child_process')
  .execSync('git branch --show-current | tr "\n" "-"')
  .toString()
const buildTimestamp = require('child_process')
  .execSync('date +%x | tr -d "/"')
  .toString()

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.tsx'),
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  resolve: {
    fallback: {
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer')
    },
    extensions: ['.ts', '.js', '.tsx', '.jsx']
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    host: '0.0.0.0',
    port: 3333,
    hot: true,
    open: false
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpg|gif|webp)$/i,
        use: ['url-loader']
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      __BUILD_VERSION: JSON.stringify(buildVersion),
      __BUILD_BRANCH: JSON.stringify(buildBranch),
      __BUILD_TIMESTAMP: JSON.stringify(buildTimestamp)
    })
  ]
}
