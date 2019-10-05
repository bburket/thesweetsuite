
import React, { Component } from "react";
import ReactDOM from "react-dom";
class DoStuff extends Component {
  constructor() {
    super();

  }
  render() {
    return (
      <h3>Hello World: {this.props.title}</h3>
    );
  }
}

export default DoStuff;