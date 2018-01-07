/**
 * Created by tangang on 2018/1/3.
 */
import React from 'react';
import { Button,Row, Col } from 'antd';
import '../../style/article.css'

export const ManagerArticleCell = (props)=>(

            <div className="managerArticleCellContainer">
                <Row>
                    <Col span={16} >
                        <div className="cellAboutArticle">
                            <p className="articleTitle">{props.data.title}</p>
                            <p className="articleInfo">
                                <span>作者:{props.data.author}</span>
                                <span>阅读数:{props.data.viewCount}</span>
                                <span>评论数:{props.data.commentCount}</span>
                                <span>发表时间:{props.data.time}</span>
                            </p>
                        </div>
                        <div className="cellState">
                            <span>
                                {props.data.isPublish?'已发布':'草稿'}
                            </span>
                        </div>

                    </Col>
                    <Col span={8} className="cellOperation">
                        <Button className='m' type='primary' icon="edit" onClick={()=>{props.edit_article(props.data._id);props.history.push('/admin/newArticle')}}>编辑</Button>
                        <Button className='m' type='primary' icon="delete" onClick={()=>props.delete(props.data._id)}>删除</Button>
                        <Button className='m' type='primary' icon="eye-o" onClick={()=>{props.history.push(`/detail/${props.data._id}`,{id:props.data._id});props.getArticleDetail(props.data._id)}}>查看</Button>
                    </Col>
                </Row>
            </div>
);