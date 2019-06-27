import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Test from './test';
import Draft from './Draft';
import SaleShop from './SaleShop'
import Count from './Count'
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import { Provider } from 'react-redux';


const initialState = {
  count: 0
};
function reducer(state = initialState,action) {
  console.log('reduce',state,action);
  switch (action.type) {
    case "ADDCOUNT":
      return {
        count: state.count + 1
      };
    case "SUBTRACTION":
      return {
        count: state.count - 1
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
}
const store = createStore(reducer);
store.dispatch({type:"ADDCOUNT"});
store.dispatch({type:"ADDCOUNT"});
store.dispatch({type:"SUBTRACTION"});
store.dispatch({type:"RESET"});

const App = () => (
    <Provider store={store}>
      <Count/>
    </Provider>
);
ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
