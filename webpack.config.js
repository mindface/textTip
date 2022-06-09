const { Module } = require("webpack");
const MODE = "development"
const enabledSourceMap = MODE === "development";

module.exports = {
  mode: MODE,
  entry: './index.ts',
  module: {
    rules: [
     {
        test: /\.ts$/,
        use: 'ts-loader'
     },{
      test: /\.(sa|sc|c)ss$/,
      use:[
        "style-loader",
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: enabledSourceMap,
              importLoaders: 2
            }
          },{
            loader: 'sass-loader',
            options: {
              sourceMap: enabledSourceMap,
            }
          }
        ]
     }
    ]
  },
  target: ["web","es5"],
  resolve: {
    extensions: [
     '.ts','.js'
    ]
  }
}