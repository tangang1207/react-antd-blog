import React, {Component, PropTypes} from 'react'
import {
    Route,
    Switch
} from 'react-router-dom'
import Home from './home'
import Detail from './detail'
import NotFound from './not_found'
import { BackTop } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions } from '../reducers/admin/admin_tags_manager'
import { actions as FrontActinos } from '../reducers/home'
const { get_all_tags } = actions;
const { get_article_list } = FrontActinos;

class IndexApp extends Component {

    render() {
        const {url} = this.props.match;
        return(
            <div>
                <div >
                    <Switch>
                        <Route exact path={url} component={Home}/>
                        <Route path={`/detail/:id`} component={Detail}/>
                        <Route path={`/:tag`} component={Home}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
                <BackTop />
            </div>
        )
    }

    componentDidMount() {
        this.props.get_all_tags();
    }

}

IndexApp.defaultProps = {
    categories:[]
};

IndexApp.propTypes = {
    categories:PropTypes.array.isRequired
}

function mapStateToProps(state) {
    return{
        categories:state.admin.tags,
        userInfo: state.globalState.userInfo
    }
}
function mapDispatchToProps(dispatch) {
    return{
        get_all_tags:bindActionCreators(get_all_tags,dispatch),
        get_article_list:bindActionCreators(get_article_list,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexApp)