function deepCopy(object) {
  var newObject = {};
  for (var key in object) {
    if (typeof object[key] === "object" && object[key] !== null) {
      newObject[key] = deepCopy(object[key]);
    } else {
      newObject[key] = object[key];
    }
  }
  return newObject;
}

console.log(deepCopy({ a: 2, b: 4 }));
