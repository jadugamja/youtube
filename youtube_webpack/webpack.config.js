import { createRequire } from "module";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);
const __dirname = fileURLToPath(new URL(".", import.meta.url));
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    mode: "development",
    entry: {
        app: ["./src/index.js"]
    },
    output: {
        filename: "bundle.js",
        // path: A place where you store bundle.js and index.html
        path: path.resolve(__dirname, "public"),
        publicPath: "/"
    },
    // 이걸.. 어떡해야?
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
            {   // 이미지 로더
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 8192, // url-loader 쓰는 경우, 8192 바이트까지 처리
                        // set file name in project
                        name: "assets/images/[name].[ext]",
                        // publicPath: "/public/"
                    }
                }],
                include: path.resolve(__dirname, "src/assets/images"),
                exclude: /node_modules/,
                type: "asset/resource"
            }, 
            {   // 확장자 js 생략 가능
                test: /\.m?js$/,
                resolve: {
                    fullySpecified: false,
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"),
            filename: "index.html",
            publicPath: "/"
        }),
        new webpack.ProvidePlugin({
            process: "process/browser.js"
        })
    ],
}

export default config