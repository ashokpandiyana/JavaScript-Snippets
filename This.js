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
  },
};
obj.getName();
obj.getName2();
