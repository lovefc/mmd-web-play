const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: 'development', //production
    entry: {
        'assgin/main': __dirname + '/src/index.js',
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(htm|html)$/,
                loader: 'html-withimg-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                include: __dirname,
                exclude: /(node_modules)/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
				include: __dirname+'/dist/src/images',
                loader: require.resolve('file-loader'),
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assgin/images/',
                    esModule: false
                }
            },
            {
                test: /\.js$/,
				include: __dirname+'//dist/src/js',
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'], // 声明兼容模式
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                include: __dirname,
                exclude: /(node_modules)/,
                loader: 'file-loader',
                options: {
                    limit: 100000,
                    outputPath: 'assgin/css/fonts/',
                    name: '[name].[hash:7].[ext]'
                }
            },
            {
                test: require.resolve('three'),
				use: [
				   'imports-loader?this=>window'
                ]
            }
        ]
    },	
    plugins: [
        new MiniCssExtractPlugin({
            filename: "assgin/css/main.css",
        }),
        new htmlWebpackPlugin({
            chunks: ['assgin/main'],
            inject: 'body',
            filename: 'index.html',
            template: 'src/page/index.html',
            //favicon: 'src/page/favicon.ico',
            showErrors: false,
            minify: false,
            hash: true,
            isBrowser: false,
            isDevelopment: process.env.NODE_ENV !== 'production',
            nodeModules: process.env.NODE_ENV !== 'production' ? path.resolve(__dirname, '../node_modules') : false
        }),
        new CopyWebpackPlugin({
            patterns: [
			   { from: 'model', to: 'assgin/model' },
			   { from: 'src/common', to: 'assgin/js' },
			]
        }),
    ],
    optimization: {
        minimize: true
    }
}