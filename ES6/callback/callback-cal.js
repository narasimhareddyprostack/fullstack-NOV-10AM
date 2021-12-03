let sum = (a, b) => {
  return a + b;
};
let multi = (a, b) => {
  return a * b;
};
let calculate = (a, b, callback) => {
  return callback(a, b);
};

let r1 = calculate(10, 20, sum);
let r2 = calculate(10, 20, multi);
console.log(r1);
console.log(r2);
let r3 = calculate(30, 10, (a, b) => {
  return a - b;
});
console.log(r3);
