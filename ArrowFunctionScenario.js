// This doesn;t work inside arrow function nested inside or Dynamic Scoping doesn't work
var obj = {
  helloWorld: function () {
    console.log(this);
    return "hello world, " + this.name;
  },
  name: "John Snow",
};

var obj2 = {
  helloWorld: obj.helloWorld,
  name: "John Doe",
};

console.log(obj.helloWorld());
console.log(obj2.helloWorld());
