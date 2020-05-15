import React, { Component } from 'react';
import Cell from './Cell';
export default class Matrix extends Component {


  genRow = (vals) => {
    console.log(vals);
    return vals.map((val, index) => <Cell value={val} />) // replace me and render a cell component instead!
  }

  genMatrix = () => {
    console.log(this.props.values)
    return this.props.values.map((rowVals, index) => <div key={index} className="row">{this.genRow(rowVals)}</div>)
  }

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}

let defaultArr = [];

for (let i = 0; i < 10; i++) {
  defaultArr[i] = []
  for (let j = 0; j < 10; j++) {
    defaultArr[i].push('#F00');
  }
}


Matrix.defaultProps = {
  values: defaultArr,
}
