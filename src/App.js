import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

// ステートのマッピング(今回はただたんにAppのstateを返し、
// Messageコンポーネントにてconnectの引数として使用しているが、
// 本来は必要なステートだけ用意するために使う。)
function mappingState(state) {
  return state;
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>Redux</h1>
        <Message />
        <Button />
      </div>
    );
  }
}

// ストアのコネクト(コンポーネントに接続するための関数)
App = connect()(App);

// メッセージ表示のコンポーネント
class Message extends Component {
  style = {
    fontSize: "20px",
    padding: "20px 5px",
  }

  render() {
    return(
      <p style = {this.style}>
        {this.props.message}: {this.props.counter}
      </p>
    )
  }
}
// ストアのコネクト(mappingStateは上のほうに定義した関数のこと)
// ここでAppで定義したstateがpropsで使えるようになる
Message = connect(mappingState) (Message);


// ボタン表示のコンポーネント
class Button extends Component {
  style = {
    fontSize: "16px",
    padding: "5px 10px",
  }

  constructor(props) {
    super(props);
    this.doAction = this.doAction.bind(this);
  }

  // ボタンクリックでディスパッチを実行(ディスパッチとはレデューサーを呼び出し、値を操作するためのもの)
  // またReduxに「アクション」を送る働きをする
  doAction(e) {
    if(e.shiftKey) {
      this.props.dispatch({type: 'DECREMENT'});//ここでアクションにはtypeという値を使う必要がある。
    } else {
      this.props.dispatch({type: 'INCREMENT'});
    }
  }

  render() {
    return(
      <button style={this.style} onClick={this.doAction}>
        click
      </button>
    );
  }
}

// ストアのコネクト
Button = connect()(Button);

export default App;
