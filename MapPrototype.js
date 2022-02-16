Array.prototype.myMap = function (fn) {
  var item = [];
  for (var i = 0; i < this.length; i++) {
    item.push(fn(this[i]));
  }
  return item;
};

const dummy = (item) => item * 2;

console.log([1, 2, 3, 4].myMap(dummy));
console.log([1, 2, 3, 4].map(dummy));
