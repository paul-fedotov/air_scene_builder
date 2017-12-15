"use strict";
let webpack = require('webpack');
let path = require('path');
let loaders = require('./webpack.loaders');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let DashboardPlugin = require('webpack-dashboard/plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "7000";

loaders.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader?importLoaders=1', 'sass-loader'],
    exclude: ['node_modules']
});

module.exports = {
    entry: ['./src/index.js'],
    devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        loaders
    },
    devServer: {
        contentBase: "./public",
        // do not print bundle build stats
        noInfo: true,
        // enable HMR
        hot: true,
        // embed the webpack-dev-server runtime into the bundle
        inline: true,
        // serve index.html in place of 404 responses to allow HTML5 history
        historyApiFallback: true,
        port: PORT,
        host: HOST
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        }),
        new DashboardPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            files: {
                css: ['style.css'],
                js: [ "bundle.js"]
            }
        })
    ]
};
