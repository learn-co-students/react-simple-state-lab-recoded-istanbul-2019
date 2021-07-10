import React, { Component } from 'react';

export default class Matrix extends Component {
  
  genRow = (vals) => {
    return vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}


let arr= [];
for(let i = 0 ; i < 10 ; i++){
  arr[i] =[]
  for(let j =0; j< 10; j++){
    arr[i][j] = '#F00';
  }
}


Matrix.defaultProps ={
  values:arr
} 