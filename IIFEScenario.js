var value = 1;

function normal() {
  console.log(value);
  var value = 4;
  console.log(value);
}
normal();

(function () {
  console.log(value);
  var value = 2;
  console.log(value);
})();
