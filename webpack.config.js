const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  target: "node",
  externals: [nodeExternals()],
  entry: "./src/index.ts",
  devtool: process.env.NODE_ENV !== "production" && "eval-source-map",
  devServer: {
    contentBase: "./dist"
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".ts", ".js", ".graphql"]
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: "ts-loader" },
      {
        exclude: /node_modules/,
        test: /\.graphql$/,
        use: [{ loader: "graphql-import-loader" }]
      }
    ]
  }
};
