// let a = 10;
// console.log(a);

// // ------------------------- Hoisting is not supported
// a = 10;
// console.log(a);
// let a;

// // ----------------------------------------- Not Typesafe
// let a = 10;
// console.log("a is:", a);
// console.log("Type of a is:", typeof a);

// a = "Hello";
// console.log("a is:", a);
// console.log("Type of a is:", typeof a);

// --------------------------------------------- Redeclaration
// You cannot create a variable with same name using let keyword
// let a = 10;
// let a = "Hello";
// console.log("a is:", a);
// console.log("Type of a is:", typeof a);

// ---------------------------------- Block Scoping is supported with let keyword
// let i = "Hello";
// console.log("Before, i is:", i);

// for (let i = 0; i < 5; i++) {
//     console.log("Inside loop, i is:", i);
// }

// console.log("After, i is:", i);

// =====================
// let i;
// i = 10;
// const j;
// j = 20;

// let i = 10;
// i = 20;

// const j = 20;
// j = 30;