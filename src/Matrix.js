import React, { Component } from 'react';
import { defaultPattern } from './data';
import Cell from './Cell';
export default class Matrix extends Component {

  genRow = (vals) => {
    return vals.map(val => <Cell value={val} />) //<div className="cell" value={val} ></div> // replace me and render a cell component instead!
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
  values: defaultPattern
};
