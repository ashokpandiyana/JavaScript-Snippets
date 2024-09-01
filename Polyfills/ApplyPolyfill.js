Function.prototype.customApply = function (obj = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error("It's not a function");
  }
  if (args.length === 0 || !Array.isArray(args)) {
    throw new Error("Args is not an array");
  }
  obj.func = this;
  obj.func(...args);
};
