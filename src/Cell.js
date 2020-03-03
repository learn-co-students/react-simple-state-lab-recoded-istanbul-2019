import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props){
      super()
      this.state={
       color: props.value
  }
}
// this.changTGray=this.changTGray.bind(this)
clickedHandler= () =>{
    const col="#333"
this.setState({color:col})
}
  render() {
    return (
      <div  onClick={this.clickedHandler} className="cell" style={{backgroundColor: this.state.color}}>
        
      </div>
    )
  }
  
}
