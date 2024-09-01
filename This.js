// Array.prototype.print = function () {
//   console.log(this);
// };

// [1, 2].print();

let name = "hello"; //

const obj = {
  name: "hi",
  getName: () => {
    console.log(this.name); // undefined for let,const ,vat outside of this scope
  },
  getName2: function () {
    console.log(this.name);
    (() => {
      console.log(this);
    })();
  },
};
obj.getName();
obj.getName2();

var obj2 = {
  a: 5,
  b: function () {
    console.log(this);
    var c = function () {
      console.log(c, this);
    };
    c();
  },
};

obj2.b();
