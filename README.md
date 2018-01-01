个人博客系统
============

关于
---------
本项目基于react技术，并结合redux作为数据流框架，采用antd作为页面展示UI，完成个人博客系统的搭建


--------- 
项目界面UI采用antd,参考[ant dedign](https://ant.design/index-cn)
````
#安装antd组件
npm install antd --save-dev
````

参考官网的样式[按需加载](https://ant.design/docs/react/introduce-cn)修改`webpack.config.js`文件
````
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
````
参考[ babel-plugin-import](https://github.com/ant-design/babel-plugin-import)安装插件

编写前台展示页面
--------- 
- 在src下分别创建目录components(存放公共组件),pages(界面显示UI),style(样式文件)

- 在pages目录下创建home.js文件
````
import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <h1>Vircent's Blog</h1>
        )
    }
};

export default Home;
````
- 修改根目录下的index.js
````
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';

ReactDOM.render(<Home />, document.getElementById('root'));

````

- `npm start` 运行，浏览器查看是否正常显示。

###相关问题
- 无法识别箭头函数
需要引入babel-preset-stage-0包，并且在webpack.config.js进行配置`stage-0`
````
test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:{
                    "presets":["es2015","react","stage-0"],
                    "plugins": [
                        ["import", { "libraryName": "antd", "style": true }] // `style: true` 会加载 less 文件
                    ]

                }
````
