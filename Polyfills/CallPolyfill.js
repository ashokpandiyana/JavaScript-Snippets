Function.prototype.customCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("It's not a function");
  }
  context.func = this;
  context.func(...args);
};
