/**
 * Created by tangang on 2018/1/3.
 */
import React, { Component } from 'react';
import {Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

const menus = [
    {url: '/', name: '首页', iconType: 'home'},
    {url: '/managerUser', name: '用户管理', iconType: 'usergroup-delete'},
    {url: '/newArticle', name: '发文', iconType: 'file-text'},
    {url: '/managerTags', name: '标签管理', iconType: 'tags-o'},
    {url: '/managerArticle', name: '文章管理', iconType: 'edit'},
    {url: '/managerComment', name: '评论管理', iconType: 'message'},
];

export default class AdminMenu extends Component {
    constructor(props){
        super(props)
        this.state = {
            url: '/admin',
            collapsed: false,
        }

    }
    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }

    render() {
        return(
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}


                >
                    <Menu
                        selectedKeys={[this.state.url]}
                        mode="inline"
                        theme="dark"
                        onClick={({key}) => {
                            this.props.history.push(`/admin${key}`)
                            this.setState({
                                url: key
                            })
                        }}
                    >
                        {
                            menus.map( (item, index) =>
                                <Menu.Item key={item.url}>
                                    <Icon type={item.iconType} />
                                    <span>{item.name}</span>
                                </Menu.Item>
                            )
                        }
                    </Menu>
                </Sider>
        )
    }
}
