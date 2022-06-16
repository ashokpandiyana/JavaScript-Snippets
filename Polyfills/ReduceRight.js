const numbers = ["45", "4", "9", "16", "25"];
let sum = numbers.reduceRight(myFunction);
let sum2 = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}

Array.prototype.myReduceRight = function (cb, acc) {
  let accumulator = acc;
  for (let i = this.length - 1; i > -1; i--) {
    accumulator = cb(accumulator, this[i]);
  }
  return accumulator;
};

let sum3 = numbers.myReduceRight(myFunction, " ");
console.log(sum, sum2, sum3);
