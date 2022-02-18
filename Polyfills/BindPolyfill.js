Function.prototype.myBind = function (currentContext = {}, ...args) {
  currentContext.func = this;
  return function () {
    return currentContext.func(...args);
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
