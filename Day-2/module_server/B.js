// //Method-1
// const {pi, add, A} = require("./A.js");

// // Variable
// console.log(pi);
// //function
// add(5, 39);
// // Class
// const a = new A(1, "John");
// a.display();

// Method-2
const ob = require("./A.js");

//Variable
console.log(ob.pi);
//Function
ob.add(45, 3);
//Class
const a1 = new ob.A(2, "Tom");
a1.display();
