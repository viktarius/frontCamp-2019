const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/app.js',
    },
    devtool: 'source-map',
    output: {
        path: path.join(process.cwd(), './dist'),
        filename: '[name].bundle.js',
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }, {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ]
    },
    devServer: {
        port: 8081,
        overlay: true
    }
};