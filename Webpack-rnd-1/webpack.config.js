// The node:path module provides utilities for working with file and directory paths. It can be accessed using:
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/App.js",
  output: {
    /*Path to be the bundled js file is generated.
     *path.resolve method which creates proper string representing path to your file.
     */
    path: path.resolve(__dirname, "dist"),
    filename: "output.js", //bundled js custom file name
  },

  //Loader
  module: {
    rules: [
      {
        //What's the extenstion and what you want to upload.
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 3800,
  },
};
