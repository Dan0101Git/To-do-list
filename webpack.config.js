// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
  fallback: {
    util: require.resolve("util/")
  }
},

  devtool:"eval-source-map",
  devServer:{
    watchFiles:["./src/index.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
        {
            test: /\.html$/i,
            loader: "html-loader",
        }
,
// webpack.config.js
{
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: "asset/resource",
}

    ],
  },
};
