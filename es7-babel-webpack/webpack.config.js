const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
    },
    devtool: 'source-map',
    output: {
        path:  path.join(process.cwd(), './dist'),
        filename: '[name].js',
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    },
    devServer: {
        port: 8081,
        overlay: true
    }
};