const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // mode: process.env.NODE_ENV || 'production',
  mode: 'development',
  optimization: {
    emitOnErrors: true
  },
  entry: './src/index.tsx',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
        // use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        exclude: /node_modules/,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      }
    ]
  },
  devServer: {
    // static: './src'
    static: path.resolve(__dirname, 'src'),
    port: 8080,
    historyApiFallback: true,
    // watchContentBase: true
    open: true,
    hot: true
  },
  // performance: {
  //   // maxEntrypointSize: 256,
  //   // maxAssetSize: 256
  //   hints: false
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new BundleAnalyzerPlugin({ generateStatsFile: true })
    // new MiniCssExtractPlugin({
    //   filename: '[name].css'
    // })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    publicPath: '/',
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
    clean: true
  }
};
