let employees = [
  { id: 101, name: "Rahul", sal: 45000 },
  { id: 102, name: "Priyanka", sal: 45000 },
  { id: 103, name: "Sonia", sal: 45000 },
  { id: 104, name: "Robert", sal: 85000 },
];

function dispaly() {
  let tbody = document.getElementById("table_body");
  let rows = "";
  for (emp of employees) {
    rows =
      rows +
      `<tr><td> ${emp.id}</td>
           <td> ${emp.name}</td>
           <td> ${emp.sal}</td>
        </tr>`;
  }
  tbody.innerHTML = rows;
}
