let employees = [
  { id: 101, name: "Rahul Gandhi", sal: 45000 },
  { id: 101, name: "Rahul Gandhi", sal: 45000 },
];
let createEmployee = (emp) => {
  setTimeout(() => {}, 3000);
};
let getEmployee = () => {
  setTimeout(() => {}, 1000);
};
createEmployee({ id: 103, name: "Sonia Gandhi", sal: 55000 });
getEmployee();
