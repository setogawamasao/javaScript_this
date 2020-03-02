var obj = new (function() {
  this.name = "obj";
  console.log(this); // => {name: "obj"}
})();

var obj = function() {
  this.name = "obj";
  console.log(this); // => {name: "obj"}
  return this;
}.call({});
