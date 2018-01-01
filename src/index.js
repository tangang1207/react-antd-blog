import React from 'react';
import ReactDOM from 'react-dom';

import MyRoute from './router';
import { BrowserRouter as Router, Switch, Route, history } from 'react-router-dom';

import './index.css';

ReactDOM.render(<Router>
        <div>
            <Switch>
                <Route component={MyRoute} />
            </Switch>
        </div>
    </Router>,
     document.getElementById('root'));
