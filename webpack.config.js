const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  // mode: 'development',
  entry: './src/index.tsx',
  // devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        exclude: /node_modules/,
        type: 'asset/resource'
      }
    ]
  },
  devServer: {
    static: './public'
  },
  performance: {
    // maxEntrypointSize: 256,
    // maxAssetSize: 256
    hints: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './src/index.html'
    }),
    new BundleAnalyzerPlugin({ generateStatsFile: true })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    publicPath: '/programming-school/',
    filename: 'main.js',
    // filename: "bundle.[fullhash].js",
    path: path.resolve(__dirname, 'public'),
    clean: true
  }
  // optimization: {
  //     runtimeChunk: 'single',
  // },
};
