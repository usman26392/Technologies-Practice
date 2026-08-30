

const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Cleaning up the /dist folder
  },

  // loaders
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

  // plugins 
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],


};
