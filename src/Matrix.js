import React, { Component } from "react";
import Cell from "./Cell";

export default class Matrix extends Component {
  genRow = (vals) => {
    console.log("Vals", vals);
    return vals.map((val) => <Cell value={val} />); // replace me and render a cell component instead!
  };

  genMatrix = () => {
    console.log("getMatrix-Values", this.props.values);
    return this.props.values.map((rowVals) => (
      <div className="row">{this.genRow(rowVals)}</div>
    ));
  };

  render() {
    return <div id="matrix">{this.genMatrix()}</div>;
  }
}

let defaultArray = [];

for (let i = 0; i < 10; i++) {
  defaultArray[i] = [];
  for (let x = 0; x < 10; x++) {
    defaultArray[i].push("#f00");
  }
}

Matrix.defaultProps = {
  values: defaultArray,
};
