Promise.letsBuildAnAny = function (arrayOfPromises) {
  let errors = [];
  return new Promise((resolve, reject) => {
    arrayOfPromises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch((error) => {
          errors.push(error);
          if (errors.length == arrayOfPromises.length) reject(errors);
        });
    });
  });
};

var a = new Promise((resolve) =>
  setTimeout(() => {
    resolve(3);
  }, 200)
);
var b = new Promise((resolve, reject) => reject(9));
var c = new Promise((resolve) => resolve(5));

var d = Promise.letsBuildAnAny([a, b, c]);
d.then((result) => console.log(result));
