let s1 = [10, 20, 30];
let s2 = [40, 50, 60];
let s3 = [...s1, ...s2];
console.log(s3);

let s4 = [70, 80, 90];
let s5 = [...s3, ...s4, 100];
console.log(s5);
