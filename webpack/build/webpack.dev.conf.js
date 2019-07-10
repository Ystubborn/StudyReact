// 1. 引入 base merge path
const path = require("path");
const baseConfig = require("./webpack.base.conf");
const merge = require("webpack-merge");

// 2. 暴露出去
module.exports = merge(baseConfig, {
  // mode
  mode: "development",

  // devServer
  devServer: {
    contentBase: path.resolve(__dirname, "../dist")
  }
});
