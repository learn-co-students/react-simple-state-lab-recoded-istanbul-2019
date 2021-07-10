import React, { Component } from "react";

export class Cell extends Component {
  constructor(props) {
    super();
    this.state = {
      color: props.value,
    };
  }
  render() {
    return (
      <div
        className="cell"
        style={{ backgroundColor: this.state.color }}
        onClick={this.changeColor}
      ></div>
    );
  }

  changeColor = () => {
    this.setState({
      color: "#333",
    });
  };
}

export default Cell;
