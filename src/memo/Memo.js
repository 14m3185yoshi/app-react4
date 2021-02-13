import React, { Component } from 'react';
import { connect } from 'react-redux';

import Item from './Item';

class Memo extends Component {
  render() {
    let data;
    let n = 0;
    switch(this.props.mode) {//操作によって表示する内容が変わるため、modeの値によって表示する内容を変えている。
      case 'default':
        data = this.props.data.map((value) => (
          <Item key={value.message} value={value} index={n++} />
        ));
        break;

      case 'find':
        data = this.props.fdata.map((value) => (
          <Item key={value.message} value={value} index={n++} />
        ));
        break;

      case 'delete':
        data = this.props.data.map((value) => (
          <Item key={value.message} value={value} index={n++} />
        ));
        break;

      case 'default':
        data = this.props.data.map((value) =>(
          <Item key={value.message} value={value} index={n++} />
        ));
        break;
    }
    return(
      <table>
        <tbody>
          {data}
        </tbody>
      </table>
    );
  }
}

export default connect((state) => state)(Memo);