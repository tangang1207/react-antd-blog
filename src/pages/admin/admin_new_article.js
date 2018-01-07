import React,  { Component } from 'react';

import {Layout,Input,Select,Button,Modal,Row,Col} from 'antd';

import remark from 'remark';
import reactRenderer from 'remark-react';
import '../../style/markdown.css';

const { Header , Content} = Layout;

const { TextArea } = Input;

const tags = ['首页', 'iOS', 'Python'];


class AdminNewArticle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
            content:'',
            tags:[],
            modalVisible: false
        }

    }

    titleOnChange(e){
        this.setState({
         title: e.target.value
        });

    }
    onChanges(e) {
        this.setState({
            content: e.target.value
        });

    }
    selectTags(value) {
        this.setState({ tags: value })
    };
    //预览
    preView() {
        this.setState({
            modalVisible: true
        })
    };

    //发表
    publishArticle() {

    };

    //保存
    saveArticle() {

    };

    //handleOk
    handleOk() {
        this.setState({
            modalVisible: false
        })
    };


    render () {
        return (
            <div>
                <h2>发文</h2>
                <Layout>
                    <Content>
                        <span>标题</span>
                        <Input
                            placeholder={'请输入文章标题'}
                            type='text'
                            value={this.state.title}
                            onChange={this.titleOnChange.bind(this)}
                        />
                        <Row className="m">
                            <Col span={12}>
                                <span>正文</span>
                            </Col>
                            <Col span={12}>
                                <span>实时预览</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                 <TextArea
                                     rows={20}
                                     value={this.state.content}
                                     onChange={this.onChanges.bind(this)}
                                 >

                        </TextArea>
                            </Col>
                            <Col span={12}>
                                <div id='preview' className="markdown_body">
                                    {remark().use(reactRenderer).processSync(this.state.content).contents}
                                </div>
                            </Col>
                        </Row>

                        <span >分类</span>
                        <Select
                            mode='multiple'
                            style={{ width: 200 }}
                            placeholder='请选择分类'
                            onChange={this.selectTags.bind(this)}
                            value={this.state.tags}

                        >
                            {
                                tags.map((item) =>(
                                    <Select.Option key={item}>{item}</Select.Option>
                                ))
                            }

                        </Select>
                        <div className="bottomContainer">
                            <Button type="primary" onClick={this.publishArticle.bind(this)} className="m-lg">发布</Button>
                            <Button type="primary" onClick={this.saveArticle.bind(this)} className="m-lg">保存</Button>
                            <Button type="primary" onClick={this.preView.bind(this)} className="m-lg">预览</Button>
                        </div>




                    </Content>
                </Layout>
                <Modal
                    visible={this.state.modalVisible}
                    title="文章预览"
                    onOk={this.handleOk.bind(this)}
                    width={'900px'}
                    onCancel={this.handleOk.bind(this)}
                    footer={null}
                >
                        <div id='preview' className="markdown_body">
                            {remark().use(reactRenderer).processSync(this.state.content).contents}
                        </div>
                </Modal>
                
            </div>
        );
    }
}

export default AdminNewArticle;