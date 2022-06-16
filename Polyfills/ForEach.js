Array.prototype.myForEach = function (callback) {
  for (i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

[1, 2, 3, 4].myForEach((item) => console.log(item));
