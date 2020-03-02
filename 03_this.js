// this は function を呼んだ時の . の前についているオブジェクトを指している

// objオブジェクトはshowThisという関数を持っている
var obj = {
  showThis: function() {
    console.log(this);
  }
};

// func変数にobjオブジェクトはshowThisという関数を割り当てる
var func = obj.showThis;

// 実行(.の前はなし(グローバル))
func();
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

// objオブジェクトに結びついているshowThisをグローバルスコープで呼び出す
