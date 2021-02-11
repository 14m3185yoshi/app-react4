import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ステートの値
let state_value = {
  counter: 0,
  message: 'COUNTER'
}

// レデューサーの作成
function counter (state = state_value, action) {  //ここのactionには呼び出し内容をまとめたオブジェクト(レデューサーを呼び出した際の情報が保管されている)
  switch (action.type) {//レデューサーではtypeを使い「こういう呼び出しの時はこれを実行などの処理をまとめている
    case 'INCREMENT':
      return {
        counter: state.counter + 1,
        message: "INCREMENT"
      };
    case 'DECREMENT':
      return {
        counter: state.counter - 1,
        message: "DECREMENT"
      };
    default: return state;
  }
}

// ストアを作成
let store = createStore(counter);

// 表示をレンダリング
ReactDOM.render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
