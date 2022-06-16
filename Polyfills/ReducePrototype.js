Array.prototype.myReduce = function (cb, acc) {
  let accumulator = acc;
  for (let i = 0; i < this.length; i++) {
    accumulator = cb(accumulator, this[i]);
  }
  return accumulator;
};

var values = [2, 5, 5];
console.log(values.reduce((a, b) => a * b, 10));
console.log(values.myReduce((a, b) => a * b, 10));
