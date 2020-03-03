import React, { Component } from 'react';


export default class Cell extends React.Component {
 
    // we use the constructor to set the INITIAL STATE
    constructor(props) {
      super()
      this.state = {
        color: props.value
      }
    }

    render() {
      return (
        <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.changeInColor}>
        </div>
      )
    }

    changeInColor = () => {
        this.setState({
            color: "#333"
        })
    }
    
  }