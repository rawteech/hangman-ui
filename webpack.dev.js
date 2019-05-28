const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        historyApiFallback: true
    },
    devtool: 'inline-source-map',
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://127.0.0.1:8000'
        })
    }
})