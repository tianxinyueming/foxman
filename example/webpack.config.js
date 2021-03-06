const webpack = require('webpack');
const path = require('path');

exports = module.exports = {
    entry: {
        'index': './src/javascript/page/index'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist/javascript/'
    }
};