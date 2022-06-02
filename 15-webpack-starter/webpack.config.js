
const path = require('path');


module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'src/App.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: '[name].[contenthash].js',
        filename: '[name].bundle.js',
        clean: true
    }
}