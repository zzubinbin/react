import React, {Component} from 'react';
import './App.css';
import "antd/dist/antd.css";
import { Button, Select } from "antd";
import {Editor, EditorState, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css';


const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}

const elments = React.createElement(
    'div',
    { className:'test' },
    'hello,World00000000'
);
const name = "亚历山大aa";
function Welcome(props) {
  return <div> props { props.name } </div>
}
function Element (){
  return <div>
    <h1>hello H1</h1>
    <h2>It is { new Date().toLocaleTimeString() }</h2>
  </div>
}
let Obj = {
  author:{
    avatarUrl:"http://iph.href.lu/750x300?text=750*300",
    name:"一张图片"
  },
  text:"这是一段解释文字",
  data:"Thu Jun 06 2019 18:03:31 GMT+0800 (中国标准时间)"
};
function Comment(props) {
  // e是一个合成事件
  function handleClick(e) {
    e.preventDefault();
    console.log('the link was clicked');
  }
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img src= { props.date.author.avatarUrl }
             alt= { props.date.author.name }
             className="Avatar"/>
        <div className="UserInfo-name">
          { props.date.author.name }
        </div>
      </div>
      <div className="Comment-text">
        { props.date.text }
      </div>
      <div className="Comment-data">
        { props.date.data }
      </div>
      <a href="#" onClick={handleClick}>
        click me
      </a>
    </div>
  )
}
function activatelasers() {
  alert('点击了我');
}
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
        () => this.tick(),
        1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
        <div>
          <h1 onClick = { activatelasers }>Hello, world!</h1>
          <h1>{ this.state.date.toLocaleTimeString() }</h1>
        </div>
    );
  }
}

// class Clocks extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       posts: [],
//       comments: []
//     };
//   }
//   //挂载
//   //componentDidMount() 方法会在组件已经被渲染到 DOM 中后运行，所以，最好在这里设置计时器：
//   componentDidMount() {
//     //调用tick()
//     this.setState({
//       posts: response.posts
//     });
//     // this.timerID = setInterval(
//     //     () => this.tick(),
//     //     1000
//     // )
//     fetchComments().then(response => {
//       this.setState({
//         comments: response.comments
//       });
//     })
//   }
//   //卸载
//   //我们会在 componentWillUnmount() 生命周期方法中清除计时器：
//   componentWillUnmount() {
//     clearInterval(this.timerID)
//   }
//   //方法
//   tick() {
//     //更新state
//     //不要直接修改state
//     //this.state.comment = 'hello' XXX
//     //使用setState方法
//     //构造函数是唯一可以给this.state赋值的地方
//     //state的更新可能是异步的
//     //让 setState() 接收一个函数而不是一个对象
//     //这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数：
//     this.setState((state, props) => ({
//       counter: state.counter + props.increment
//     }))
//   }
//   render() {
//     return(
//         <div>
//           <h1>这是class Clock</h1>
//           <h1>{ this.state.date.toLocaleTimeString() }</h1>
//         </div>
//     )
//   }
// }

class Toggle extends React.Component{
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    //为了在回调中使用'this'，这个绑定是必不可少的
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state =>({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {
    return (
        <button onClick={this.handleClick}>
          { this.state.isToggleOn ? 'ON' : 'OFF' }
        </button>
    )
  }
}
function UserGreeting() {
  return <h1>welcome back!</h1>
}
function GuestGreeting() {
  return <h1>Please sign up</h1>
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting/>;
  }
  return <GuestGreeting/>
}

function LoginButton(props) {
  return (
      <button onClick={props.onClick}>
        Login
      </button>
  );
}
function LogOutButton(props) {
  return (
      <button onClick={props.onClick}>
        Logout
      </button>
  );
}

class LoginControl extends React.Component{
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false }
  }
  handleLoginClick() {
    this.setState({ isLoggedIn: true});
  }
  handleLogoutClick() {
    this.setState({isLoggedIn: false})
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogOutButton onClick={this.handleLogoutClick}/>
    } else {
      button = <LoginButton onClick={this.handleLoginClick}/>
    }

    return (
        <div>
          <Greeting isLoggedIn={isLoggedIn}/>
          { button }
        </div>
    )
  }
}

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  //之所以能这样做，是因为在 JavaScript 中，true && expression 总是会返回 expression,
  //而 false && expression 总是会返回 false。
  //因此，如果条件是 true，&& 右侧的元素就会被渲染，如果是 false，React 会忽略并跳过它。
  return (
      <div>
        <h1>Hello!</h1>
        { unreadMessages.length > 0 && <h2>You have { unreadMessages.length } unread messages</h2> }
      </div>
  )
}
function Mailboxs(props) {
  const isLoggedIn = props.isLoggedIn;
  return(
      <div>
        the user is <b>{ isLoggedIn ? 'currently' : 'not' }</b>logged in
      </div>
  )
}
function WaringBanner(props) {
  if (!props.warn) {
    return null
  }
  return(
      <div className="waring">
        Waring!
      </div>
  );
}
class Page extends React.Component{
  constructor(props) {
    super(props);
    this.state = { showWaring:true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  handleToggleClick() {
    this.setState(state =>({
      showWaring: !state.showWaring
    }));
  }
  render() {
    return (
        <div>
          <WaringBanner warn={ this.state.showWaring}/>
          <button onClick={this.handleToggleClick}>
            { this.state.showWaring ? 'Hide' : 'Show' }
          </button>
        </div>
    )
  }

}
const messages = ['React', 'Re:react', 'Re:Re:react'];
const mess = [];
const numbers = [2,6,8,77,50];

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((todo) =>
      <li key={todo.toString()}>{ todo }</li>
  );
  return(
      <ul>{ listItems }</ul>
  )
}
function ListItems(props) {
  return <li>{props.value}</li>
}
function NumberLists(props) {
  const numbers = props.numbers;
  const listItem = numbers.map((number) =>
   <ListItems key={number.toString()} value={number}/>
  );
  return(
      <ul>
        {listItem}
      </ul>
  )

}
const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
function ArrList(props) {
  const posts = props.posts;
  const left = (
    <ul>
      {posts.map((post) =>
        <li key={post.id}>{post.title}</li>
      )}
    </ul>
  );
  const right = posts.map((post) =>
    <div key={post.id}>
      <h2>{ post.title }</h2>
      <p>{ post.content }</p>
    </div>
  );
  return (
    <div>
      {left}
      <hr />
      {right}
    </div>
  )

}


// 表单
class NameForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    alert('提交的名字：'+this.state.value);
    event.preventDefault();
  }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <label>
            名字：
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input type="submit" value={"提交"}/>
        </form>
    )
  }
}
class FlacorForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = { value: 'cocount' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState(
        {value: event.target.value}
    )
  }
  handleSubmit(event) {
    alert('你最喜欢的是' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <label>
            选择你喜欢的风味：
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefuit">葡萄柚</option>
              <option value="lime">柠檬</option>
              <option value="cocount">椰子</option>
              <option value="mango">芒果</option>
            </select>
          </label>
          <input type="submit" value={"提交"}/>
        </form>
    )
  }
}
//多个内容表单
class Reservation extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log(value);
  }
  render() {
    return (
        <form>
          <label>
            参与：
            <input type="checkbox" name={"isGoing"} checked={this.state.isGoing} onChange={this.handleInputChange}/>
          </label>
          <br/>
          <label>
            来宾人数：
            <input type="number" name={"numberOfGuests"} onChange={this.handleInputChange} value={this.state.numberOfGuests}/>
          </label>
        </form>
    )
  }

}
//状态提升
//名为 BoilingVerdict 的组件
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>
  }
  return <p>The water would not boil</p>
}

const scaleNumbers = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      temperature: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({
      temperature: e.target.value
    })
  }
  render() {
    const temperature = this.state.temperature;
    const sceale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNumbers[sceale]}:</legend>
        <input value={temperature} onChange={this.handleChange}/>
      </fieldset>
    )
  }
}

// Calculator 组件
class Calculator extends React.Component{
  render() {
    return (
        <div>
          <TemperatureInput scale="c"/>
          <TemperatureInput scale="f"/>
        </div>
    )
  }
}

class Draft extends React.Component{
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }
  render() {
    return (
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
    );
  }
}




function Antd() {
  return (
      <div>
        <div>
          <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>Disabled</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
          <Select defaultValue="lucy" style={{ width: 120 }} disabled>
            <Option value="lucy">Lucy</Option>
          </Select>
          <Select defaultValue="lucy" style={{ width: 120 }} loading>
            <Option value="lucy">Lucy</Option>
          </Select>
        </div>
        <Toggle/>
        <Clock/>
        <Button></Button>
        <Welcome name = { name } />
        <Welcome name = { "哈哈哈" } />
        <Welcome name = { "你好" }/>
        <Element />
        <Comment date = { Obj } />
        {/*<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>*/}
        {/*<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>*/}
        <Greeting isLoggedIn = { true }/>
        <LoginControl/>
        <Mailbox unreadMessages={messages}/>
        <Mailboxs isLoggedIn={false}/>
        <div style={{height: 400}}></div>
        <Draft/>
        <Calculator/>
        <div style={{height: 400}}></div>
        <Page/>
        <NumberList numbers={numbers}/>
        <NumberLists numbers={numbers}/>
        <ArrList posts={posts}/>
        {/*<form>*/}
          {/*<label>*/}
            {/*名字：*/}
            {/*<input type="text" name="name"/>*/}
          {/*</label>*/}
          {/*<input type="submit" value={"提交"}/>*/}
        {/*</form>*/}
        <NameForm/>
        <FlacorForm/>
        <Reservation/>
      </div>
  )
}

export default Antd;


