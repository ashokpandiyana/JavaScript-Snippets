Function.prototype.customApply = function (obj, args) {
  obj.func = this;
  obj.func(...args);
};


