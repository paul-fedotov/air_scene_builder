let webpack = require('webpack');
let path = require('path');
let loaders = require('./webpack.loaders');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let WebpackCleanupPlugin = require('webpack-cleanup-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

loaders.push({
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract({fallback: 'style-loader', use : 'css-loader?sourceMap&localIdentName=[local]___[hash:base64:5]!sass-loader?outputStyle=expanded'}),
    exclude: ['node_modules']
});

module.exports = {
    entry: [
        './src/index.js',
    ],
    output: {
        publicPath: './',
        path: path.join(__dirname, '/dist/'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        loaders
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                drop_console: true,
                drop_debugger: true
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            files: {
                css: ['style.css'],
                js: ['bundle.js'],
            }
        })
    ]
};
