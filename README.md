个人博客系统
============

关于
---------
本项目基于react技术，并结合redux作为数据流框架，采用antd作为页面展示UI，完成个人博客系统的搭建

初始化
--------- 
项目初始化基于 [Create React App](https://github.com/facebookincubator/create-react-app)构建基本框架
````
#下载create-ract-app相关组件
npm install -g create-react-app

#创建react-blog
create-react-app react-antd-blog
````

查看效果
````
npm install
npm start
````
浏览器打开 [localhost:3000](http://localhost:3000/) ,看到 *Welcome to React*的首页则表示环境正常
 

webpack
--------- 
- 首先安装webpack工具包（建议全局安装）
````
//全局安装(推荐)
npm install -g webpack
//安装到你的项目目录
npm install --save-dev webpack
````

- 安装webpack-dev-server 开发工具，开发过程中可以热加载
````
//全局安装(推荐)
npm install -g webpack-dev-server
//安装到你的项目目录
npm install --save-dev webpack-dev-server
````
- 在根目录下创建webpack.config.js
````
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
            template: './public/index.html'
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
                loader: 'url-loader?limit=4096'}
        ]
    },
}
````

- 在`package.json`中的`scripts`对象中添加命令,以及相关依赖：
````
  "scripts": {
    "build": "webpack",
    "start": "webpack-dev-server --hot"
  },
    "devDependencies": {
      "babel-core": "^6.26.0",
      "babel-loader": "^7.1.2",
      "babel-preset-es2015": "^6.24.1",
      "babel-preset-react": "^6.24.1",
      "webpack": "^3.10.0",
      "webpack-dev-server": "^2.9.7"
    },
````

- 删除`public/index.html`的favicon.ico
````
<!--
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
-->
````
运行
````
npm install
npm start
````
浏览器打开 [localhost:3000](http://localhost:3000/) 检查是否正常
