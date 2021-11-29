class Central {
  tax = 18;
  applyTax() {
    console.log("Applying Tax - Central Govt");
  }
}
class KA_Govt extends Central {
  tax = 28;
}
let ka1 = new KA_Govt();
ka1.applyTax();

class GOA_Govt extends Central {
  applyTax() {
    console.log("Applying Tax - GOA Govt");
  }
}
let ga1 = new GOA_Govt();
ga1.applyTax();
