import React, { Component } from 'react';
import HomeHeader from '../components/views/header';
import { Layout, Menu, Breadcrumb } from 'antd';
import ArticleList from '../components/views/articlelist';
const { Header, Content, Footer } = Layout;


class Home extends Component {
    render() {
        return (
            <Layout>
                <Layout>
                    <Header style={{padding: 0}}>
                        <HomeHeader/>
                    </Header>
                    <Content className="home-header-content">
                        <h1>Vircent's Blog</h1>
                        <p>Love it, do  it</p>
                    </Content>
                </Layout>
                <Content>
                    <ArticleList />

                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2017 Created by Ant UED
                </Footer>

            </Layout>


        )
    }
};

export default Home;