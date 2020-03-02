// this は function を呼んだ時の . の前についているオブジェクトを指している

// thisを表示する関数
function showThis() {
  console.log(this);
}

// objオブジェクトはnameというメンバ変数を持っている
var obj = { name: "obj" };

// そのまま呼ぶとグローバル
showThis();
//　→
// Object [global] {
//   global: [Circular],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] { [Symbol(util.promisify.custom)]: [Function] },
//   queueMicrotask: [Function: queueMicrotask],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(util.promisify.custom)]: [Function]
//   }
// }

// call を使って関数を呼び出すと . に前につけるオブジェクト(thisが指すもの)を指定することができます。
showThis.call(obj);
// → {name: "obj"}

// 比較
obj.func = showThis;
obj.func();
// → { name: 'obj', func: [Function: showThis] }
// func関数に紐づけることなくnameを表示できる。
