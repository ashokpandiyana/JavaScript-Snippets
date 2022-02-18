Array.prototype.myReduce = function (cb, acc) {
  var i = 0;
  if (acc === void 0) {
    acc = this[0];
    i = 1;
  }
  for (; i < this.length; i++) {
    var newAcc = cb(acc, this[i], i, this);
    if (newAcc === undefined) continue;
    acc = newAcc;
  }
  return acc;
};

var values = [2, 5, 5];
console.log(values.reduce((a, b) => a * b, 10));
console.log(values.myReduce((a, b) => a * b, 10));
