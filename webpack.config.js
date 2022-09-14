const path = require("path");

module.exports = {
  entry: { index: "./src/index.js" }, // 진입점 (1개)
  output: {
    path: path.join(__dirname, "dist"), // 번들링 파일 저장 폴더
    filename: "bundle.js", // 번들링 파일 이름
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.sass$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: {},
  mode: "development",
};
