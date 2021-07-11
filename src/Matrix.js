import React, { Component } from 'react';
import Cell from './Cell'
import {pattern} from './data'



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

Matrix.defaultProps = {
  values: pattern
}
