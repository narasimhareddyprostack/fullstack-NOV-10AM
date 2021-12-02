let emp_ids = [101, 102, 103, 104];
let new_EmpIds = emp_ids.map((id, index) => {
  console.log(index);
  return id;
});
console.log(new_EmpIds);
