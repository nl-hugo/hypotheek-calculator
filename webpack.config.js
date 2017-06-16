// webpack.config.js
const webpack = require("webpack");
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

const extractVendor = new webpack.optimize.CommonsChunkPlugin({
  names: "vendor",
  minChunks: function (module) {
    // this assumes your vendor imports exist in the node_modules directory
    return module.context && module.context.indexOf("node_modules") !== -1;
  }
});

const config = {
  context: path.resolve(__dirname, "src"),
  entry: [
    "bootstrap-loader",
    "./js/app.js"
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    // publicPath: "/",
    filename: "js/[name].bundle.js"
  },
  module: {
    rules: [{
      test: /\.(png|jpg|csv|json)$/,
      use: [{
        loader: "file-loader",
        options: { limit: 10000, name: "[path][name].[ext]" }
      }]
    }, {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
        loader: "url-loader",
        options: { limit: 10000, name: "fonts/[name].[ext]" }
      }]
    }, {
      test: /\.scss$/,
      loader: ["style-loader", "css-loader", "sass-loader"]
    }, {
      enforce: "pre",
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "eslint-loader"
    }, {
      test: /\.js$/,
      include: path.resolve(__dirname, "src"),
      use: [{
        loader: "babel-loader",
        options: {
          presets: [
            ["es2015", { modules: false }]
          ]
        }
      }]
    }]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    extractVendor,
    new webpack.ProvidePlugin({
      d3: "d3",
      "window.d3": "d3",
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      // Tether: "tether",
      // "window.Tether": "tether",
      // Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
      Button: "exports-loader?Button!bootstrap/js/dist/button",
      // Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
      //Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
      //Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
      // Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
      // Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
      //Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
      // Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
      // Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
      Util: "exports-loader?Util!bootstrap/js/dist/util"
    }),
    new htmlWebpackPlugin({
      title: "Hypotheek calculator",
      template: "index.ejs",
      favicon: "favicon.ico"
    })
  ],
  devServer: {
    port: 8082,
    overlay: {
      errors: true
    }
  },
  devtool: "cheap-source-map"
};

module.exports = config;