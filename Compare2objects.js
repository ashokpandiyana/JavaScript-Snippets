function compare(a, b) {
  if (typeof a !== "object" && typeof b !== "object") {
    return a === b;
  } else if (typeof a === "object" && typeof b === "object") {
    if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) {
        return false;
      } else {
        for (var i = 0; i < a.length; i++) {
          console.log("This Condition Ran");
          if (a[i] !== b[i]) {
            console.log("This Condition Ran");
            return false;
          }
        }
        return true;
      }
    } else {
      for (var j in a) {
        if (b.hasOwnProperty(j)) {
          if (a[j] !== b[j]) {
            return false;
          }
        } else {
          return false;
        }
      }
    }
  }
}

console.log(compare([], []));
