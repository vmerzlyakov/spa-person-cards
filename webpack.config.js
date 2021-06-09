'use stricts'

const path = require('path');

const DEV = 'development';
const PROD = 'production';

const {
    NODE_ENV = 'development',
    IS_IE
} = process.env;

const isProd = NODE_ENV === PROD;

module.exports = {
    entry: {
        home: './src/index.js'
    },
    mode: isProd ? PROD : DEV,
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
        stats: 'normal',
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
    target: isProd || IS_IE ? 'browserslist' : 'web' 
};