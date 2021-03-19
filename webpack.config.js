const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/assets/js/main.js",
  output: {
    path: path.resolve(__dirname, "./dist/assets/js"),
    filename: "bundle.min.js",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [path.resolve(__dirname, "./src/assets/js")],
        use: "babel-loader",
      },
    ],
  },
};
