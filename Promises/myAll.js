const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The first promise has resolved");
    resolve(10);
  }, 1 * 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The second promise has resolved");
    resolve(20);
  }, 2 * 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The third promise has resolved");
    resolve(30);
  }, 3 * 1000);
});

// Promise.all([p1, p2, p3]).then((results) => {
//   const total = results.reduce((p, c) => p + c);

//   console.log(`Results: ${results}`);
//   console.log(`Total: ${total}`);
// });

Promise.myAll = function (values) {
  return new Promise((resolve, reject) => {
    let completed = 0;
    let results = [];
    values.forEach((value, index) => {
      Promise.resolve(value)
        .then((result) => {
          completed++;
          results[index] = result;
          if (completed === values.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });
  });
};

Promise.myAll([p1, p2, p3]).then((results) => {
  const total = results.reduce((p, c) => p + c);

  console.log(`Results: ${results}`);
  console.log(`Total: ${total}`);
});
