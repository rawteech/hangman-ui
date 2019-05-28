var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/index.jsx'],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })]
}