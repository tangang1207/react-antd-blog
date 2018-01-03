/**
 * Created by tangang on 2018/1/2.
 */
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import AdminMenu from '../../components/views/admin_menu';
import AdminIndex from './admin_index';
import AdminManagerUser from './admin_user_manager';
import NotFound from '../not_found';


class Admin extends React.Component {

    render(){
        const { url } = this.props.match;
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <AdminMenu history={this.props.history} />
                <Layout style={{ width: '85%',overflowY: 'scroll' }}>
                    <Switch>
                        <Route exact path={url} component={AdminIndex}/>
                        <Route path={`${url}/managerUser`} component={AdminManagerUser}/>
    {/*                    <Route path={`${url}/managerTags`} component={AdminManagerTags}/>
                        <Route path={`${url}/newArticle`} component={AdminNewArticle}/>
                        <Route path={`${url}/managerArticle`} component={AdminManagerArticle}/>
                        <Route path={`${url}/managerComment`} component={AdminManagerComment}/>
                        <Route path={`${url}/detail`} component={Detail}/>*/}
                        <Route component={NotFound}/>
                    </Switch>
                </Layout>


            </Layout>


        );
    }



}
export default Admin;

