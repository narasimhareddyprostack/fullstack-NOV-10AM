let emp_Login_Result = {
  result: "Success",
  user: {
    isAdmin: false,
    created: "2021-06-12T13:07:34.185Z",
    _id: "60c4b1e8981cd12818dbc9d7",
    name: "imran",
    email: "imran@gmail.com",
    password: "$2a$10$tQl10ER/CTrq5NGzzU424OF39r8eD3UK5SKczMFxvjx.tLVQ5pM/2",
    __v: 0,
  },
};

console.log(emp_Login_Result.user.name);
for (x in emp_Login_Result) {
  console.log(emp_Login_Result[x]);
}
