Function.prototype.myBind = function (obj = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("It's not a function");
  }
  obj.func = this;
  return function (...newArgs) {
    return obj.func(...args, ...newArgs);
  };
};

var myButton = {
  content: "OK",
  click: function () {
    console.log(this.content + " clicked");
  },
};

myButton.click();
var ourButton = {
  content: "NOT OK",
};

var looseClick = myButton.click;
looseClick(); // not bound, 'this' is not myButton - it is the globalThis

var boundClick = myButton.click.bind(ourButton);
boundClick();
var myClick = myButton.click.myBind(ourButton, "Hello ", "World");
myClick();
