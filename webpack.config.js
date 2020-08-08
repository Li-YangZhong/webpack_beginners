const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
module.exports = {
    watch: false,
    mode: "production",
    devtool: "cheap-module-eval-source-map",
    entry: "./src/index.js",
    output: {
        filename: "application.js",
        path: path.resolve(__dirname, 'build')
    },
    optimization: {
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCSSAssetsPlugin({})
        ],
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { importLoaders: 1 } }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [
                            require('autoprefixer')({
                                overrideBrowserslist: ['last 3 versions', 'ie >9']
                            })
                        ]
                    }
                }],
            },
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { importLoaders: 1 } }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [
                            require('autoprefixer')({
                                overrideBrowserslist: ['last 3 versions', 'ie >9']
                            })
                        ]
                    }
                }, 'sass-loader'],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'application.css'
        })
    ]
}