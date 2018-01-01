import React, { Component } from 'react'
import '../style/notfound.css'

export default class NotFound extends Component {
    constructor(props) {
        super(props)
        this.state = {
            animationType: 'swing'
        }
        this.enter = this.enter.bind(this)
    }

    enter(){
        this.setState({
            animationType:'hinge'
        });

        setTimeout( ()=> {
            this.setState({
                animationType:'lightSpeedIn'
            })
        },5000)
    }

    render(){
        return(
            <div className="container">
                <div >非常抱歉,我们暂时无法提供这个页面的访问.</div>
            </div>
        )
    }
}