import React, {Component} from 'react'
import {
    Route,
    Switch
} from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
import NotFound from './pages/not_found'
import { BackTop } from 'antd'

class Front extends Component {
    constructor(props){
        super(props);
    }

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
}

export default Front;