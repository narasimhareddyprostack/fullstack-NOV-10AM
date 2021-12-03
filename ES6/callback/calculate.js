let calculate = (a, b, c) => {
  if (c == "sum") {
    return a + b;
  }
  if (c == "multi") {
    return a * b;
  }
};
let result1 = calculate(10, 20, "sum");
let result2 = calculate(10, 20, "multi");
console.log(result1);
console.log(result2);
