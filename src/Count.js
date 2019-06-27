import React, {Component} from 'react';
import {Button} from "antd";
import './index.css'

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.addCoutn = this.addCoutn.bind(this);
    this.subtraction = this.subtraction.bind(this);
  }
  addCoutn() {
    this.setState({
      count: this.state.count + 1
    })
  }
  subtraction() {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
        <div className={"count"}>
          <h2>Couter</h2>
          <Button onClick={this.subtraction}>-</Button>
          <span className={"count-span"}>{this.state.count}</span>
          <Button onClick={this.addCoutn}>+</Button>
        </div>
    );
  }
}

export default Count
