const path = require("path");

module.exports = {
    webpack: {
        publicPath: "./",
        alias: {
            "@components": path.resolve(__dirname, "src"),
            "@Header": path.resolve(__dirname, "src/Header"),
            "@Main": path.resolve(__dirname, "src/Main"),
            "@Nav": path.resolve(__dirname, "src/Nav"),
            "@assets": path.resolve(__dirname, "src/assets"),
        }
    }
};

// ES6
// import path from "path";

// export default {
//     webpack: {
//         publicPath: "./",
//         alias: {
//             "@components": path.resolve(__dirname, "src"),
//             "@Header": path.resolve(__dirname, "src/Header"),
//             "@Main": path.resolve(__dirname, "src/Main"),
//             "@Nav": path.resolve(__dirname, "src/Nav"),
//             "@assets": path.resolve(__dirname, "src/assets"),
//         }
//     }
// }