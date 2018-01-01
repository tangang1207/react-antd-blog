import React, { Component } from 'react';
import HomeHeader from '../components/views/header';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;


class Home extends Component {
    render() {
        return (
            <Layout className="layout">
                <HomeHeader/>
                <h1>Vircent's Blog</h1>
            </Layout>


        )
    }
};

export default Home;