let employees = [
  { id: 101, name: "Rahul Gandhi", sal: 45000 },
  { id: 101, name: "Rahul Gandhi", sal: 45000 },
];
let createEmployee = (emp) => {
  setTimeout(() => {
    employees.push(emp);
  }, 3000);
};
let getEmployee = () => {
  setTimeout(() => {
    let rows = "";
    employees.forEach((emp) => {
      rows =
        rows +
        `<tr><td>${emp.id}</td>
             <td>${emp.name}</td>
             <td>${emp.sal}</td>
         </tr>`;
    });
    document.getElementById("abc").innerHTML = rows;
  }, 1000);
};
createEmployee({ id: 103, name: "Sonia Gandhi", sal: 55000 });
getEmployee();
