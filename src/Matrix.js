import React, { Component } from 'react';
import Cell from './Cell.js';
export default class Matrix extends Component {

  genRow = (vals) => {
    return vals.map(val => <div className="cell"><Cell value={val} /></div>)
  }

  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div> || '#F00')
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
  values: Array(10).map(nestedArr => Array(10).fill('#F00'))
};