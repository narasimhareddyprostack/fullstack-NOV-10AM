//import { tax, Tax } from "./govt";  //ES 6 named import
const { tax, Tax } = require("./govt");
console.log(tax); //18
let obj = new Tax();
