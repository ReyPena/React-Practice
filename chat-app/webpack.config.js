var path = require("path");
var webpack = require("webpack");

module.exports = {
  context: path.resolve("core/app/"),
  entry: "./index.jsx",
  output: {
    path: path.resolve("public/assets/js/"),
    publicPath: "public/assets/js/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "public"
  },
  module: {
    preLoaders: [
      {
        test: /(\.js$)/,
        exclude: /(node_module|server)/,
        loader: "jshint-loader"
      }
    ],
    loaders: [
      {
        test: /(\.jsx$|\.js$)/,
        exclude: /(node_module|server)/,
        loader: "babel-loader"
      }, {
        test: /\.scss$/,
        exclude: /(node_modules|server)/,
        loader: "style-loader!css-loader!autoprefix!sass-loader"
      }
    ]
  },
  resolve: {
    extensions: [
      "", ".js", ".jsx"
    ]
  },
  watch: true
};
