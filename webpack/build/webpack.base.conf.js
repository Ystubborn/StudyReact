const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  // 入口
  entry: path.resolve(__dirname, "../src/index.js"),

  // 出口
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js"
  },

  module: {
    // Loader 规则
    rules: [
      {
        test:/\.(js|jsx)$/,
        use:"babel-loader",
        exclude:[/node_modules/]
      },
      {
        test:/\.css$/,
        use:["style-loader","css-loader"]
      }
    ]
  },
  //别名
  resolve:{
    alias:{
      '@':path.resolve(__dirname,"../src")
    }
  },
  //插件
  plugins: [
    // html-webpack-plugin
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html")
    }),

    // copy-webpack-plugin
    new CopyWebpackPlugin([{ from: path.resolve(__dirname, "../public") }])
  ]
};
