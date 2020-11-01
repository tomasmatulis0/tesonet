const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['@babel/polyfill', './public/index.jsx'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: ['babel-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: [/\.png$/, /\.eot$/, /\.ttf$/, /\.svg$/, /\.woff$/, /\.woff2$/],
                use: [
                    'file-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html',
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@Assets': path.resolve(__dirname, 'assets'),
            '@Components': path.resolve(__dirname, 'src/js/components'),
            '@Hooks': path.resolve(__dirname, 'src/js/hooks'),
            '@Config': path.resolve(__dirname, 'src/js/config'),
        },
    },
    devServer: {
        historyApiFallback: true,
    },
};
