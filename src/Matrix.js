import React, { Component } from 'react';

export default class Matrix extends Component {

  genRow = (vals) => {
    return vals.map(val => <div className="cell"></div>) // replace me and render a cell component instead!
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
let defArray = new Array(10)
for (let row = 0; row < 10; row++) {
  defArray[row] = new Array(10);
  for (let col = 0; col < 10; col++) {
    console.log(defArray[row][col])
    defArray[row][col] = "#F00"

  }

}
Matrix.defaultProps = {
  values: defArray

}