const path = require("path");
const nodeExternals = require("webpack-node-externals");

clientConfig = {
  mode: "development",
  entry: {
    client: ["./src/client.js", "@babel/polyfill"]
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js"
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  }
};

serverConfig = {
  mode: "development",
  target: "node",
  externals: [nodeExternals()],
  entry: {
    server: ["./index.js", "@babel/polyfill"]
  },
  output: {
    path: path.resolve(__dirname, ".."),
    filename: "[name].js"
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  }
};

module.exports = [clientConfig, serverConfig];
