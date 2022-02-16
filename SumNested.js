const sum = (a) => (b) => b ? sum(a + b) : a;
console.log(sum(4)(3)(4)());
