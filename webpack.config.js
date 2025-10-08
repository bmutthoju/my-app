// Node.js built-in module to handle file paths
const path = require("path");

// Plugin to generate an HTML file and inject script tags automatically
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  // Entry point(s) of the application
  entry: {
    bundle: "./src/index.js", // main React app entry point
  },

  // Output configuration for bundled files
  output: {
    path: path.resolve(__dirname, "dist"), // folder to output the bundles
    filename: "[name].[contenthash].js", // [name] = entry name, contenthash for caching
    chunkFilename: "[name].[contenthash].js", // 👈 dynamically loaded chunks
    clean: true, // cleans the dist folder before each build
  },

  // Module rules specify how different file types are processed
  module: {
    rules: [
      {
        test: /\.js$|\.jsx$/, // matches .js and .jsx files
        exclude: /node_modules/, // ignore node_modules
        use: "babel-loader", // transpile ES6+ and JSX into browser-compatible JS
      },
      {
        test: /\.css$/i, // matches .css files
        use: ["style-loader", "css-loader"],
        // css-loader: interprets @import and url() like import/require
        // style-loader: injects CSS into the DOM
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // matches common image types
        type: "asset/resource", // emits images as separate files and returns URL
      },
    ],
  },

  // Automatically resolves these extensions so imports don't need extensions
  resolve: {
    extensions: [".js", ".jsx"], // import files without specifying .js or .jsx
  },

  // Plugins add extra functionality to Webpack
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // base HTML file to inject scripts into
    }),
  ],

  // Optimization configuration for code splitting and caching
  optimization: {
    splitChunks: {
      chunks: "all", // consider all types of chunks (sync + async)
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/, // target all modules from node_modules
          name: "vendor", // name of the resulting vendor chunk
          chunks: "all", // apply to all chunks
          priority: -10, // lower priority than other cacheGroups if defined
          reuseExistingChunk: true, // reuse existing chunk if identical
        },
        default: {
          minChunks: 2, // modules must be shared by at least 2 chunks
          priority: -20, // lower priority than vendors
          reuseExistingChunk: true, // reuse chunks if possible
        },
      },
    },
  },

  // Development server configuration
  devServer: {
    static: "./dist", // serve files from dist folder
    historyApiFallback: true, // 👈 IMPORTANT for React Router to handle client-side routes
    hot: true, // enable Hot Module Replacement
    port: 3000, // run dev server on port 3000
  },
};
