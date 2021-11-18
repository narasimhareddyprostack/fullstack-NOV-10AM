let size = [38, 40, 42, 44];
//How to find whether given arrray is empty or not
console.log(size.length == 0);
//Array is Iterable Object
/*
    -for(), while(), do{}while()  - Traditional Iterative Loop
    -for(of )  - only for Array
*/
for (s of size) {
  console.log(s);
}
console.log("_____________");
console.log(size[20]); //undefined , index 20 is not there
