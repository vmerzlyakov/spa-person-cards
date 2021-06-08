'use stricts'

var path = require('path');

module.exports = {
    entry: {
        home: './src/index.js'
    },
    mode: 'development',
    output: {
        filename: './main.js',
        path: path.resolve(__dirname, 'assets')
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        hot: true,
        publicPath: '/assets/',
        port: 7777,
        progress: true,
        watchContentBase: true
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
        }, {
            test: /\.scss$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
        }]
    },
    target: ['web', 'es5']
};