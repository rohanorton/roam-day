//webpack.config.js
const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.ts",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
  },
  resolve: {
    extensions: [".ts"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
    ],
  },
};
