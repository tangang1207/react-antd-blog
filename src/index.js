import React from 'react';
import ReactDOM from 'react-dom';

import MyRoute from './router';
import Admin from './pages/admin/admin';
import configureStore from './store';
import { Provider } from 'react-redux';


import { BrowserRouter as Router, Switch, Route, history } from 'react-router-dom';

import './index.css';

console.log('enter index');
const store = configureStore();


ReactDOM.render(
<Provider store={store}>
        <MyRoute/>
    </Provider>,
     document.getElementById('root'));
