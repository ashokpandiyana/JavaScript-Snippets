const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The first promise has resolved");
    resolve(10);
  }, 1 * 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The second promise has rejected");
    reject(20);
  }, 2 * 1000);
});

Promise.myAllSettled = function(promises){
  let result = []
  return new Promise ((resolve,reject)=>promises.forEach(val=> val.then(output => result.push(output)).catch(err => result.push(err))))
}

Promise.allSettled([p1, p2]).then((result) => {
  console.log(result);
});



Promise.myAllSettled([p1, p2]).then((result) => {
  console.log(result);
});
