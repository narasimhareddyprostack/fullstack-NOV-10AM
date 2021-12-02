let employees = [10, 20, 30, 40];
//let new_Employees = employees.map();
//let new_Employees = employees.map(() => {});
let new_Employees = employees.map((employee) => {
  return employee + 1;
});
console.log(employees);
console.log(new_Employees);
