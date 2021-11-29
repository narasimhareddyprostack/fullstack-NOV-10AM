class Bank {
  min_Bal = 500; // Property
  open_Account() {
    console.log("Account Opened Successfully - Parent Class ie Bank");
  }
}
class Saving_Accoount extends Bank {
  min_Bal = 800;
  open_Account() {
    console.log("Account Opened Successfully - Child Class ie Saving_Account");
  }
}
let s1 = new Saving_Accoount();

console.log(s1.min_Bal);
s1.open_Account();
class Current_Account extends Bank {}
let c1 = new Current_Account();
console.log(c1.min_Bal);
