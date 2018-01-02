import React, { Component } from 'react';
import remark from 'remark';
import { Layout,Row, Col } from 'antd';
import reactRenderer from 'remark-react';
import HomeHeader from '../components/views/header';
import '../style/markdown.css';

const { Header, Content, Footer } = Layout;
const articleContent = "## 标题 \n```code``` \n jlkfdsjal";

class Detail extends React.Component {
    render(){
        return (
            <Layout>
            <Layout>
                <Header style={{padding: 0}}>
                    <HomeHeader/>
                </Header>
                <Content className="home-header-content">
                    <h1>文章标题</h1>
                    <p>副标题</p>
                </Content>
            </Layout>
            <Content>

                <Row>
                    <Col span={8} push={8}>
                        <div className="markdown_body">
                            {remark().use(reactRenderer).processSync(articleContent).contents}
                        </div>
                    </Col>
                </Row>

            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2017 Created by Ant UED
            </Footer>

        </Layout>);
    }
}

export default Detail;