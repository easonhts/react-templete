const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = (uri) => path.resolve(__dirname, uri);

module.exports = {
  mode: 'development',
  entry: {
    app: '../src/index.tsx'
  },
  output: {
    path: resolve('../dist'),
    filename: '[name]..js'
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.(tsx | ts)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('../public/index.html')
    })
  ],
  resolve: {
    alias: {
      '@': resolve('../src'),
    },
    extensions: ['.js', '.jsx', 'ts', 'tsx'],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080,
  }
}