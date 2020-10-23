import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <button onClick={this.props.onClick.bind(this, this.props.btnName)}></button>
        )
    }
}
