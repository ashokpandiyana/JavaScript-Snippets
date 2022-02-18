Function.prototype.customCall = function (obj, ...args) {
  obj.func = this;
  obj.func(...args);
};
