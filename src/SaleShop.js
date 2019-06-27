import React, {Component} from 'react';
import {Button, Input, Tag} from "antd";
import './App.css'
import SaleProduct from "./SaleProduct";
import axios from 'axios';

class SaleShop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: '中午吃啥'
    };
    this.addList = this.addList.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.getJsonData = this.getJsonData.bind(this);
  }
  getJsonData(){
    const that = this;
    axios.get('https://www.easy-mock.com/mock/5cd52a04c385bc03ca2648f1/list')
        .then(function (res) {
          that.setState({
            list:res.data.data
          });
        })
        .catch(function (error) {
          console.log(error)
        })
  }
  addList(){
    if (this.state.inputValue !== '') {
      this.setState({
        list: [...this.state.list,this.state.inputValue],
        inputValue: ''
      })
    }
  }
  deleteItem(index) {
    let lists = this.state.list;
    lists.splice(index,1);
    this.setState({
      list:lists
    })
  }
  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  componentWillMount() {
    console.log("111组件将要渲染",new Date().getTime());
  }
  componentDidMount() {
    console.log("111组件渲染完成",new Date().getTime());
    this.getJsonData();
  }
  componentWillReceiveProps(nextProps, nextContext) {
    console.log("111将要接收一个新的props",new Date().getTime());
  }
  componentWillUpdate(nextProps, nextState) {
    //在组件接收到新的props或者state但还没有render时被调用
    console.log('111在组件接收到新的props或者state但还没有render时被调用',new Date().getTime());
  }
  componentDidUpdate(prevProps, prevState) {
    //在组件完成更新后立即调用。在初始化时不会被调用。
    console.log('111在组件完成更新后立即调用。在初始化时不会被调用。',new Date().getTime())
  }
  componentWillUnmount() {
    //在组件从 DOM 中移除之前立刻被调用。
    console.log('111在组件从 DOM 中移除之前立刻被调用。',new Date().getTime())
  }
  render() {
    return (
      <React.Fragment>
        {console.log('111渲染',new Date().getTime())}
        <div>
          <Tag htmlFor="saleBooking" color="#2db7f5">点外卖：</Tag>
          <Input  type="text" id={"saleBooking"} onChange={this.handleChange} value={this.state.inputValue}/>
          <Button onClick={this.addList}>下单</Button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) =>
             <SaleProduct
                 key={index+item}
                 content={item}
                 index={index}
                 deleteItem={this.deleteItem}
                 list={this.state.list}
             />
            )
          }
        </ul>
      </React.Fragment>
    )
  }
}

export default SaleShop
