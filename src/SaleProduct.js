import React, {Component} from 'react';
import PropTypes from 'prop-types'

class SaleProduct extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillMount(){
    console.log("组件将要渲染");
  }
  componentDidMount(): void {
    console.log("组件渲染完成");
  }
  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.content !== this.props.content){
      return true
    } else {
      return false
    }
  }
  componentWillReceiveProps(nextProps, nextContext) {
    console.log("将要接收一个新的props");
  }
  componentWillUpdate(nextProps, nextState) {
    //在组件接收到新的props或者state但还没有render时被调用
    console.log('在组件接收到新的props或者state但还没有render时被调用');
  }
  componentDidUpdate(prevProps, prevState) {
    //在组件完成更新后立即调用。在初始化时不会被调用。
    console.log('在组件完成更新后立即调用。在初始化时不会被调用。')
  }
  componentWillUnmount() {
    //在组件从 DOM 中移除之前立刻被调用。
    console.log('在组件从 DOM 中移除之前立刻被调用。')
  }
  handleClick(){
    console.log(this.props.index);
    this.props.deleteItem(this.props.index);
  }
  render() {
    return (
      <li onClick={this.handleClick}>{this.props.content}</li>
    )
  }
}

SaleProduct.propTypes = {
  content:PropTypes.string,
  deleteItem:PropTypes.func,
  index:PropTypes.number
};

export default SaleProduct
