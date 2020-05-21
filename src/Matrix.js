import React, { Component } from 'react';
import Cell from './Cell.js'
import { pattern1 } from './data.js'


export default class Matrix extends Component {
  
  genRow = (vals) => {
    // console.log(vals)
    return vals.map(val => <Cell value={val}/>) // replace me and render a cell component instead!

  }
  
  genMatrix = () => {
    // console.log(this.props.values)
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
let newPattren = [...pattern1]
let big = [];
for (let el of newPattren) {
  let arr = []
  for (let innerEl of el) {
    let fofo = innerEl.replace("#00F", '#F00')
    arr.push(fofo)
  }
  big.push(arr)
}
console.log(big)



Matrix.defaultProps = {
  values: big,
  
  // [
  //   ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  //   ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  //   ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  //   ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  //   ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  //   ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  //   ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  //   ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  //   ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
  //   ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
  // ]

  
}