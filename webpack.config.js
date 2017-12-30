const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: [
        path.join(__dirname, "./src/index.js")  //项目的唯一入口文件
    ],

    output: {
        path:path.join(__dirname, "public"),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins:  [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin(
        {
            template: './public/index.html',

        }

        ),
    ] ,

    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        hot:true
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
            {
                test: /\.css$/,
                loader:'style-loader!css-loader'
            },
            {test: /\.(jpg|ttf|svg|png)$/,
                loader: 'url-loader?limit=4096' }
        ]
    },
}