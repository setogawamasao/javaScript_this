// // this は function を呼んだ時の . の前についているオブジェクトを指している
// thisを表示する関数
function showThis() {
  console.log(this);
}

// 実行(.の前はなし(グローバル))
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
// 呼び出し時に . がないので、 this はグローバルオブジェクト
