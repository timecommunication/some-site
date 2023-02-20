const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: "development",
    entry: './src/main.js',
    output: {
        filename: 'bundle.[contenthash].js',
        // filename: 'bundle.js',
        // path: path.resolve(__dirname, 'dist'),
        path: path.resolve(__dirname, '../dist'),
        clean: true,
        // publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.template.html"
        }),
        new MiniCssExtractPlugin({
            filename: "./css/some-site-style.css"
        })
    ],
    devtool: 'source-map',
    devServer: {
        static: './dist',
        // client: {
        //     logging: "error"
        // }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }

            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        runtimeChunk: 'single',
        usedExports: true,
    },
    resolve: {
        extensions: ['.jsx', '.js'],
    }
};
