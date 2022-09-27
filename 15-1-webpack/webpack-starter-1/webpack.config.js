
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  // entry: './src/index.js',
  entry: {
    index: "./src/index.js",
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',         // This tells webpack-dev-server to serve the files from the dist directory on localhost:8080
    
  },
  output: {
    // filename: 'bundle.js',
    // filename: "[name].bundle.js",
    filename: '[name].[contenthash].js', // for Caching
    path: path.resolve(__dirname, "dist"),
    clean: true, // Cleaning up the /dist folder
  },
  module: {
    rules: [
      {
        // loading css from index.js
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        // loading images
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        // loading fonts
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],

  // optimization: {
  //   moduleIds: 'deterministic',
  //   runtimeChunk: 'single',
  // },


};
