// Adding Prototype to object means it will add that method to all other data types

Object.prototype.introduce = function () {
  return "Hello World";
};
String.prototype.introduce = function () {
  return "Hello World from String";
};
let hi = "Hello";
let num = 2;
console.log(hi.introduce());
console.log(num.introduce());
