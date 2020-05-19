import React, { Component } from 'react';
export default class Cell extends Component {
    constructor(props) {
      super()
      this.state = {
          color: props.va
      }
    }
    
    

    render() {
        return (
            <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handelColorChange}></div>
        )
    }

    handelColorChange = () => {
        this.setState({color: '#333'});
    }

}