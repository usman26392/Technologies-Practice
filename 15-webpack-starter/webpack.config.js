
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'src/App.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        // filename: '[name].bundle.js',
        assetModuleFilename: '[name] [ext]',
        clean: true
    },
    devtool: 'inline-source-map',
    devServer:{
        static: path.resolve(__dirname, 'dist'),
        port: 5001,
        open: true,
        hot: true,
        watchFiles: [path.resolve(__dirname, 'src')]
    },
    // loaders
    module: {
        rules: [
            // loading css
            { 
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            // loading images
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            // js for babel
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            }
        ]
    },

    //plugins
    plugins: [ 
        new HtmlWebpackPlugin({
            title: 'Just a demo',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/temp.html')
        })
    ]
}