import React, { Component } from 'react';

export default class Cell extends Component{
  constructor(props){
    super();
    this.state = {color: props.value}
  }
  changeColor = () =>{
    let currentColor = this.state.color;
    this.setState({
        color: "#333"
    })

  }

  render(){
    return(<div className="cell" onClick={this.changeColor} style={{backgroundColor: this.state.color}}>


        </div>);

  };
}
