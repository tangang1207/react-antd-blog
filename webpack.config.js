const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractLESS = new ExtractTextPlugin('app.min.css');

module.exports = {
    entry: [
        path.join(__dirname, "./src/index.js")  //项目的唯一入口文件
    ],

    output: {
        path:path.join(__dirname, "public"),
        filename: 'bundle.js',
        publicPath: '/'
    },


    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        hot:true
    },
    module: {
        loaders: [
            {   test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:{
                    "presets":["es2015","react"],
                    "plugins": [
                        ["import", { "libraryName": "antd", "style": true }] // `style: true` 会加载 less 文件
                    ]

                }
            },
            {
                test: /\.less$/,
                loader: extractLESS.extract([ 'css-loader', 'less-loader'])
            },

            {test: /\.(jpg|ttf|svg|png)$/,
                loader: 'url-loader?limit=4096' }
        ]
    },
    plugins:  [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin(
            {
                template: './public/index.html',

            }

        ),
        extractLESS
    ],
}