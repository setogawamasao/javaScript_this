// this は function を呼んだ時の . の前についているオブジェクトを指している

// thisを表示する関数
function showThis() {
  console.log(this);
}

// 下記は　var obj = new Object();　と同じ　・・・(1)
var obj = {};

// objオブジェクトのメソッドとしてshowThisを設定・・・(2)
obj.func = showThis;

// 実行(.の前はobj)
obj.func();
//　→　{ func: [Function: showThis] }
// this = obj なのでthisには(1),(2)の結果が表示される。
//　objオブジェクトの中身は関数funcが定義されており、その処理の実態はshowThis
