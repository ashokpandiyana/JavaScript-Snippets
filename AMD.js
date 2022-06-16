var people = (function () {
  var name = "will";
  function sayName() {
    console.log(name);
  }
  return {
    sayName,
  };
})();

people();
