import React, { Component } from 'react';
import Cell from './Cell';
export default class Matrix extends Component {


  genRow = (vals) => {
    console.log(vals);
    return vals.map((val, index) => <Cell value={val} />) // replace me and render a cell component instead!
  }

  genMatrix = () => {
    console.log(this.props.values)
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

let newArray = [];

for (let i = 0; i < 10; i++) {
  newArray[i] = []
  for (let j = 0; j < 10; j++) {
    newArray[i].push('#F00');
  }
}


Matrix.newArray = {
  values: newArray,
}