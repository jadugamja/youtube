const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const config = {
    mode: "development",
    entry: {                    // 시작 파일
        app: ["./src/index"]
    },
    output: {                   // 결과물
        filename: "bundle.js",
        path: __dirname + "/public"
    },
    // For Webpack 4
    resolve: {
        alias: {
            src: path.resolve(__dirname, "src")
        }
    },
    devServer: {
        open: true,         // 새 창 열림
        hot: true,          // Hot Module Reload
        static: {
            directory: __dirname + "/public"
        },
        host: "localhost",
        port: 3000
    },
    module: {                   // 전처리기 등록하는 부분
        rules: [
            {
                test: /\.(js|jsx)$/i,
                use: [{
                    loader: "babel-loader"
                }]
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 8189
                    }
                }]
            }
        ]

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/public/index.html"
        })
    ],
}

module.exports = config;