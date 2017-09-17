const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: './src/index.js',
    output: {
        path: '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$|.js$/,
                loader: ['babel-loader'],
                exclude: /node_modules/
            },
            { test: /\.css$/, loader: 'style!css' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
        port: '9000',
        host: 'localhost'
    }
}