import React, { Component } from 'react';
import Rect from './Rect';
import './App.css';

let theme = {
  light: {
    backgroundColor: "#eef",
    color: "#006",
    padding: "10px",
  },
  dark: {
    backgroundColor: "#066",
    color: "#eef",
    padding: "10px",
  }
}

const ThemeContext = React.createContext(theme.dark);

class App extends Component {
  newdata = {title: '新しいタイトル', message: 'これは新しいメッセージです'};

  render() {
    return(
      <div style={this.context}>
        <Title value="Context" />
        <Message value="This is Context sample" />
        <Message value="これはテーマのサンプルです" />
      </div>
    );
  }
}

class Title extends Component {
  static contextType = ThemeContext;

  render() {
    return(
      <h2 style={this.context}>{this.props.value}</h2>
    );
  }
}

class Message extends Component {
  static contextType = ThemeContext;

  render() {
    return(
      <p style={this.context}>{this.props.value}</p>
    );
  }
}

export default App;
