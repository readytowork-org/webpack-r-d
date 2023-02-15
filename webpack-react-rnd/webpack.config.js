const port = process.env.PORT || 8000;
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "main.js",
    //If you want to create unique bundle file everytime you build the project then you can use fullhash like this
    // filename:"main.[fullhash].js"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/, //regex to check the file extension
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          // "sass-loader"
        ], //style-loader ----> inject css into DOM.  css-loader ----> inject css to main.js file. sass-loader --> convert to css
      },
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: "html-loader",
      //     },
      //   ],
      // },
      {
        test: /\.(png|svg|jpeg|jpg)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "images",
          },
        },
      },
    ],
  },

  //Injecting index.html template to everytime the built is created
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    host: "localhost",
    port: port,
    historyApiFallback: true,
    open: true,
  },
};
