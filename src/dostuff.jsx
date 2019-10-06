
import React, { Component } from "react";
import ReactDOM from "react-dom";
class DoStuff extends Component {
  constructor() {
    super();
    this.state = {};
  }

  shouldComponentUpdate(nextProps, nextstate) {
    console.log("shouldComponentUpdate invoked")
    return true;
  }

  handleClick() {
    
  }

  render() {
    return (
      <React.Fragment>
        <h3>Hello World: {this.state.time}</h3>
        <button type="button" class="btn btn-primary" onClick={() => {
          let date = new Date();
          this.state.time = date.toString();
          this.setState(this.state);
        }}>Click Me</button>
      </React.Fragment>
    );
  }
}

export default DoStuff;