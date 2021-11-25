let emp = {
  name: "Ravi Kumar",
  sal: 45000,
  loc: "Bangalore",
  email: "greetlabs@gmail.com",
};
console.log(emp);
//how to read object properties
console.log(emp.email);
console.log(emp.loc);
//console.log(emp.joinDate); // undefined
emp.is_Avail = true;

console.log(emp);

emp.email = "Ravikumar@tcs.com";
console.log(emp);

//delete property
delete emp.sal;
console.log(emp);
