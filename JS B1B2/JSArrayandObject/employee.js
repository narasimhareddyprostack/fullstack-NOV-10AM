let employee = {};
console.log(typeof employee); //Object
//JS Object is not iterable object
//how find empty object or not?

if (Object.keys(employee).length == 0) {
  console.log("Yes, Given Object is Empty");
} else {
  console.log("No, Not Empty");
}
