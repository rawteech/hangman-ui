const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    externals: {
        // global app config object
        config: JSON.stringify({
            // Replace with your production domain name
            apiUrl: 'http://127.0.0.1:8000'
        })
    },
    output: {
        filename: '[name].[chunkhash].js'
    },
});