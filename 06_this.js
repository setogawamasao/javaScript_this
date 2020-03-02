// https://se-tomo.com/2019/02/10/%E3%80%90javascript%E3%80%91call%E3%81%A8apply%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E7%90%86%E8%A7%A3%E3%82%92%E3%81%BE%E3%81%A8%E3%82%81%E3%82%8B/

function showName(family, name) {
  console.log(family + name + "from：" + this.name);
}

var pref = {
  name: "Osaka"
};

// call を使って関数を呼び出すと . に前につけるオブジェクト(thisが指すもの)を指定することができます。
showName.call(pref, "田中", "太郎");
// → 田中太郎 from Osaka

// applyを使って関数を呼び出すと . に前につけるオブジェクト(thisが指すもの)を指定することができます。
// ※ 関数の引数を配列で渡すことができる。
showName.apply(pref, ["田中", "太郎"]);
// → 田中太郎 from Osaka
