let tax = 18;
let getInfo = () => {};
class Tax {
  constructor() {
    console.log("Executing from Named folder govt js file");
  }
}

//export { tax, getInfo, Tax };  // ES 6 Named Export
module.exports = { tax, getInfo, Tax };
