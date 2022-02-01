var arr = [1, 2, 3, [1, 2, 3], [4, 5, 6], 7, 8, 9];

var result = [];
function flatten(arr, result) {
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten(arr[i], result);
    } else {
      result.push(arr[i]);
    }
  }
}

flatten(arr, result);
console.log(result);
