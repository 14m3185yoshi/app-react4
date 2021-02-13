import { createStore } from 'redux';

const initData = {
  data: [{message: 'sample data', created: new Date()}],//メモのデータ
  message: 'please type message:',//表示するメッセージ
  mode: 'default',//どういう操作をしたかを表す値
  fdata: []//検索したメモをまとめておくもの
};

// レデューサー
export function memoReducer(state = initData, action) {
  switch(action.type) {
    case 'ADD':
      return addReduce(state, action);

    case 'DELETE':
      return deleteReduce(state, action);

    case 'FIND':
      return findReduce(state, action);

    default:
      return state;
  }
}

// レデューサーアクション

// メモ追加のレデュース処理
function addReduce(state, action) {//actionにユーザーから入力されたメモの内容が入る。
  let data = {
    message: action.message,
    created: new Date()
  };
  let newdata = state.data.slice();//一度sliceメソッドでdataの配列を生成しなおす。
  newdata.unshift(data);//unshiftメソッドでnewdataの配列の最初に追加する。
  return {
    data:newdata,
    message: 'Added!',
    mode: 'default',
    fdata: [],
  };
}

// メモ検索のレデュース処理
function findReduce(state, action) {
  let f = action.find;
  let fdata = [];
  state.data.forEach((value) =>{
    if (value.message.indexOF(f) >= 0) {//indexOFは入力された文字がなにもなかった場合は-1を返すので、入力された文字が合った際に、下記のコードでpushしている。
      fdata.push(value);
    }
  });
  return {
    data: state.data,
    message: 'find "' + f + '":',
    mode: 'find',
    fdata: fdata,
  };
}

// メモ削除のレデュース処理
function deleteReduce(state, action) {
  let newdata = state.data.slice();
  newdata.splice(action.index, 1);//splice()メソッドは、配列から要素を削除・追加して組み替えます。第一引数(action.indexは選択されたメモのindex)で、第二引数で削除する数。
  return {
    data: newdata,
    message: 'delete "' + action.index + '":',
    mode: 'delete',
    fdata: []
  }
}


// アクションクリエーター

// メモ追加のアクション
export function addMemo(text) {
  return {
    type: 'ADD',
    message: text
  }
}

// メモ削除のアクション
export function deleteMemo(num) {
  return {
    type: 'DELETE',
    index: num
  }
}

// メモ検索のアクション
export function findMemo(text) {
  return {
    type: 'FIND',
    find: text
  }
}

// ストアを作成
export default createStore(memoReducer);
