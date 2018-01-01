import React, { Component } from 'react';
import HomeNavigation from './navigation';

export default class Header extends Component {
    render() {
        return (
            <div >
                <HomeNavigation/>
                <h1>Vircent's Blog</h1>
                <p>Love it, do  it</p>
            </div>
        )

    }
}