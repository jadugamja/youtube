const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const jsConfigPath = path.resolve(__dirname, "./jsconfig.json") 

const config = {
    mode: "development",
    entry: {
        app: ["./src/index"]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public")
    },
    devServer: {
        open: true,
        static: {
            directory: path.resolve(__dirname, "public")
        },
        host: "localhost",
        port: 3000
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
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                exclude: /node_modules/,
                type: "asset"
            },
        ]
    },
    // resolve: {
        plugins: [
            new HtmlWebpackPlugin({
                template: __dirname + "/public/index.html"
            }),
            // new TsconfigPathsPlugin({ 
            //     configFile: jsConfigPath
            // })
        ],
    // }
}

module.exports = config;