const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
            { test: /\.html$/, use: 'html-loader' },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/template.html',
    })],
    mode: 'development'
};