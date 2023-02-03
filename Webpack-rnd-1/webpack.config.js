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
}; 