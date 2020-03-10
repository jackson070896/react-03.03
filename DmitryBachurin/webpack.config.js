const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                include: path.resolve(__dirname, "src"),
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, "node_modules"),
                options: {
                    presets: ['@babel/env', '@babel/react']
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, "src", "index.html")})
    ]
}