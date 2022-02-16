let inputEle = document.getElementById("btn");
let heading = document.getElementById("Text");

const throttle = function (fn, d) {
  let inthrottle;
  return function () {
    let context = this,
      args = arguments;
    if (!inthrottle) {
      fn.apply(context, args);
      inthrottle = true;
      setTimeout(() => {
        inthrottle = false;
        heading.style.color = "red";
        heading.textContent = "Throttle Ran";
      }, d);
    }
  };
};

const getData = (e) => {
  console.log("Function Ran");
  heading.style.color = "black";
  heading.textContent = "Button Clicked No Function Will Ran";
};

const doSomeMagic = throttle(getData, 1000);

inputEle.addEventListener("click", doSomeMagic);
