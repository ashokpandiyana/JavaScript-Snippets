let inputEle = document.getElementById("inputBox");
let heading = document.getElementById("Text");

const debounce = function (fn, d) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, d);
  };
};

const getData = (e) => {
  heading.textContent = e.target.value;
};

const doSomeMagic = debounce(getData, 1000);

inputEle.addEventListener("keyup", doSomeMagic);
