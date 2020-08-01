"use strict";
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
    entry: {
        main: ["./src/main.js"],
    },
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "./src"),
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader",
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000,
                            fallback: "file-loader",
                            name: "images/[name].[ext]",
                        },
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10000,
                            fallback: "file-loader",
                            name: "fonts/[name].[ext]",
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                context: "./public",
                from: "*.*",
            },
        ]),
        new Dotenv(),
    ],
    devServer: {
        contentBase: "./public",
        host: "localhost",
        port: 3000,
        proxy: {
            "**": "http://localhost:5000",
        },
    },
};