let user = { name: "Narasimha", email: "greetlabs@gmail.com", sal: 45000 };
let details = { email: "narasimha@tcs.com", sal: 85000, loc: "Bangalore" };

let user_Details = { ...user, ...details };
console.log(user_Details);
