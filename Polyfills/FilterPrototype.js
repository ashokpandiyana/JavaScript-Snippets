Array.prototype.myFilter = function (fn) {
  var item = [];
  for (var i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      item.push(this[i]);
    }
  }
  return item;
};

const dummy = (item) => item % 2 === 0;

console.log([1, 2, 3, 4].myFilter(dummy));
console.log([1, 2, 3, 4].filter(dummy));
