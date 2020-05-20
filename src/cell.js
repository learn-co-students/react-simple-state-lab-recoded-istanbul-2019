import React, { Component } from 'react';

export class Cell extends Component {

    constructor(props) {
        super();
        this.state = {
            color: props.value,
        }
    }
    render() {
        return (
            <div className="cell" style={{ backgroundColor: this.state.color }} onClick={this.newColor}>
            </div>
        )
    }

    newColor = () => {
        this.setState({
            color: '#FFF'
        })
    }
}

export default Cell