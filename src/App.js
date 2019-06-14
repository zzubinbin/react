import React from 'react';
import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css";
import Antd from './Antd'
import List from './list';
import Draft from './draft'

const name = 'josh prad';
// InputForm “仍然”使用 Button 组件，所以我们也需要这样。
// JXS 或者普通的表单都会这样做
function Buttons (props) {
  // 这里返回一个 DOM 元素。例如：
  return <button type="submit">{props.label}</button>;
}
function formatName(user) {
  return user.firstName + '' + user.lastName;
}
const user = {
  firstName:"wang",
  lastName:"huibin"
};
const tabIndex = <div tabIndex="0" className="tab-list"></div>;
const element = <img src={user.avatarUrl}></img>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>hello  { name }</span>
        <h2>
          hello,{formatName(user)}!
        </h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <form target="_blank" action="https://google.com/search">
          <div>Enter input and click Search</div>
          <input className="big-input" name="q" />
          <Buttons label="Search" />
        </form>
        <Antd/>
        <List/>
        {/*<Button type="primary">Primary</Button>*/}
      </header>
      <Draft/>
    </div>
  );
}

export default App;
