const express = require("express");
const path = require("path");

const app = express();

if (process.env.NODE_ENV !== "production") {
  const webpackMiddleware = require("webpack-dev-middleware");
  const webpack = require("webpack");
  const webpackConfig = require("./webpack.config");

  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  app.use(express.static("dist")); // makes content in dist freely available to be used
  app.get(/.*/, (req, res) => {
    res.sendFile(path.resolve(__dirname, "dist", "index.html")); // for compatibility with React router (browser history will work properly)
  });
}

app.listen(process.env.PORT || 3050, () => console.log("Listening"));
