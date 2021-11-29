class Central {
  constructor() {
    console.log("Parent Class Constructor");
  }
}
class KA_Govt extends Central {
  constructor() {
    super();
    console.log("Child Class Constructor");
  }
}
new KA_Govt();
