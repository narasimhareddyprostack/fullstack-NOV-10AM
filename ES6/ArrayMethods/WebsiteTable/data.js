let employees = [
  { id: 101, name: "Rahul Gandhi", sal: 45000 },
  { id: 102, name: "Priyanka Gandhi", sal: 55000 },
  { id: 103, name: "Sonia Gandhi", sal: 65000 },
];

function loadData() {
  let rows = "";
  employees.map((employee) => {
    rows =
      rows +
      `<tr><td>${employee.id}</td>
           <td>${employee.name}</td>
           <td>${employee.sal}</td>
        </tr>`;
  });
  document.getElementById("chandan").innerHTML = rows;
}
