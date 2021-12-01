//import bcryptjs 
//import bcrypt from 'bcryptjs' //ES6
const bcrypt  = require('bcryptjs')
let user = {
    name:"Rahul Gandhi",
    email:"Rahul@gmail.com",
    password:"123123",
    cc:'45674567'
}
//need to convert user - sensitive data to hashed format 

let salt = bcrypt.genSaltSync(10);
let new_Password = bcrypt.hashSync(user.password, salt)
let new_CC = bcrypt.hashSync(user.cc, salt)
/* console.log(new_Password);
console.log(user.password)
console.log(user.cc)
console.log(new_CC) */

let new_User = { ...user, password:new_Password, cc:new_CC}
console.log(user)
console.log(new_User)

let result = bcrypt.compareSync("123143", new_User.password)
console.log(result)