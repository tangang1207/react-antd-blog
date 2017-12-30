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

