import { createRequire } from "module";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);
const __dirname = fileURLToPath(new URL(".", import.meta.url));

const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// import webpack from "webpack";
// import path from "path";
// import HtmlWebpackPlugin from "html-webpack-plugin";

const config = {
    mode: "development",
    entry: {
        app: ["./src/index.js"]
    },
    output: {
        filename: "bundle.js",
        // path: A place where you store bundle.js and index.html
        path: path.resolve(__dirname, "public"),
    },
    resolve: {
        extensions: [".js", ".jsx"],
        fallback: {
            "fs": false,
            "os": false,
            "path": false,
            "assert": false,
            "constants": false,
        }
    },
    target: "web",
    devServer: {
        open: true,
        static: {
            directory: path.resolve(__dirname, "public")
        },
        host: "localhost",
        port: 3030,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                use: [{
                    loader: "babel-loader"
                }],
                exclude: /node_modules/
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpe?g|gif|mp4|webm)$/i,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "assets/[name].[ext]",
                    }
                }],
                exclude: /node_modules/,
                type: "asset"
            }, 
            {
                test: /\.m?js$/,
                resolve: {
                    fullySpecified: false,
                }
            }
        ]
    },
    // resolve: {
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "public/index.html")
            }),
            new webpack.ProvidePlugin({
                process: "process/browser.js"
            })
        ],
    // }
}

// module.exports = config;
export default config