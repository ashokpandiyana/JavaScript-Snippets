Array.prototype.myEquals = function (array) {
  if (!array) return false;

  if (this.length != array.length) return false;

  for (var i = 0, l = this.length; i < l; i++) {
    if (this[i] instanceof Array && array[i] instanceof Array) {
      if (!this[i].equals(array[i])) {
        return false;
      }
    } else if (this[i] != array[i]) {
      return false;
    }
  }
  return true;
};
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", { enumerable: false });
console.log([1, 2, [3, 2]].myEquals([1, 2, [3, 1]]));
