import React, { Component } from 'react';
import Cell from './Cell';
import { pattern2 } from './data';

export default class Matrix extends Component {
  
  genRow = (vals) => {
    // return vals.map(val => <Cell value={val} />)
    return vals.map(val => <Cell />)
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

Matrix.defaultProps = {
  // values: () => {
  //   const mat = [];
  //   for (let i = 0; i < 10; i++) mat.push([].fill('#F00', 10));
  //   return mat;
  // },
  values: pattern2,
}