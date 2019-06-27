import React, {Component} from 'react';
import {Button, Input, Tag} from "antd";
import './App.css'

class SaleShop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['鱼香肉丝','锅包肉'],
      inputValue: '中午吃啥'
    };
    this.addList = this.addList.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  addList(){
    this.setState({
      list: [...this.state.list,this.state.inputValue],
      inputValue: ''
    })
  }
  deleteItem(index) {

  }
  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <Tag htmlFor="saleBooking" color="#2db7f5">点外卖：</Tag>
          <Input  type="text" id={"saleBooking"} onChange={this.handleChange} value={this.state.inputValue}/>
          <Button onClick={this.addList}>下单</Button>
        </div>
        <ul>

        </ul>
      </React.Fragment>
    )
  }
}

export default SaleShop
