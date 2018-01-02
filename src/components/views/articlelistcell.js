import React, { Component } from 'react'
import { Row, Col } from 'antd';
import '../../style/home.css'

export default class ArticleListCell extends React.Component {

    render(){
        return (
            <div >
                <Row>
                    <Col span={8} push={8}>
                        <div className="article-list-cell">
                            <a href="/detail/${this.props.data.id}">
                                <h2 className="title">{this.props.data.title} + {this.props.tags}</h2>
                                <h3 className="subtitle">文章摘要等主要内容说明。。。。</h3>
                            </a>
                            <div>
                                <span className="lastSpan">
                                阅读全文
                                </span>
                            </div>
                            <p className="meta">
                                Posted by
                                <a>Vircent</a>
                                on
                                <span>{this.props.data.time}</span>

                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}