import React, { Component } from 'react';
import HomeNavigation from './navigation';
import '../../style/home.css'

const logo = require('../../logo.svg');

export default class Header extends Component {
    render() {
        return (
                <HomeNavigation/>

        )

    }
}