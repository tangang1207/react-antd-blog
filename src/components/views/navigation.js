import { Layout, Menu, Breadcrumb } from 'antd';
import React, { Component } from 'react';

const { Header, Content, Footer } = Layout;


const categories = ['首页','所有文章','关于我'];

export default class HomeNavigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current: categories[0]
        }
    }

    handleClick(e){
        this.setState ({
            current: e.key
        })
    }
    render(){
        return (
        <Menu
            theme="dark"
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
            style={{ lineHeight: '32px' }}
        >
            {
                categories.map((item,index)=>(
                    <Menu.Item key={item} >
                        {item}
                    </Menu.Item>
                ))
            }
        </Menu>
        );
    }
}