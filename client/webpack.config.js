/* eslint @typescript-eslint/no-var-requires: "off" */
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const ESLintPlugin = require('eslint-webpack-plugin')
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')
const DotEnv = require('dotenv-webpack')

const ENVIRONMENT = process.env.NODE_ENV

module.exports = {
  mode: ENVIRONMENT,
  entry: {
    main: './src/main.ts',
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      template: './template.html',
      title: 'Studies Enviroment'
    }),
    new VueLoaderPlugin(),
    new ESLintPlugin({
      extensions: ['js', 'ts', 'vue']
    }),
    new DotEnv()
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    port: 3000,
    compress: true,
    hot: true
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm-bundler.js',
    },
    plugins: [
      new TsconfigPathsPlugin()
    ]
  }
}