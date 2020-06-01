import React from 'react';

export default class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.value
        }
    }
    changeState = () => {
        this.setState({
            color: '#333'
        })
    }
    render() {
        return <div className="cell" onClick={this.changeState} style={{ backgroundColor: this.state.color }}></div>
    }
}