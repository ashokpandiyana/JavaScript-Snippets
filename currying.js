function multiply(x) {
    return (y) => {
        return (z) => {
            return x * y * z
        }
    }
}

let a = multiply(10);
a(3,12);
a(20,12);
console.log(a(20,13))


console.log(multiply(10)(3,12)(2))
console.log(multiply(10)(20,12)(2));
console.log(multiply(10)(20,13)(1));
