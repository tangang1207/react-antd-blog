import React, { Component } from 'react';
import HomeHeader from '../components/views/header';
import { Layout, Menu, Breadcrumb } from 'antd';
import ArticleList from '../components/views/articlelist';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom';
import { actions as frontActions } from '../reducers/home'
const { get_article_list, get_article_detail } = frontActions;
import { actions as IndexActions } from '../reducers/global_state_reducer'


const { Header, Content, Footer } = Layout;

function mapStateToProps(state) {
    return {
        tags: state.admin.tags,
        pageNum: state.home.pageNum,
        total: state.home.total,
        articleList: state.home.articleList,
        userInfo: state.globalState.userInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        get_article_list: bindActionCreators(get_article_list, dispatch),
        get_article_detail:bindActionCreators(get_article_detail,dispatch),
        login: bindActionCreators(IndexActions.get_login, dispatch),
        register: bindActionCreators(IndexActions.get_register, dispatch)

    }
}

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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);