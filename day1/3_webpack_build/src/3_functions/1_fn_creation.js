const i = 10;
console.log("i is: ", i);
console.log("type of i is: ", typeof i);

const f = function () {
    return "Hello";
}
console.log("f is: ", f);
console.log("type of f is: ", typeof f);

// Function is a type, which can refer to a block of code

// Can we create a variable of type number?
// If yes; We should be able to create a variable of type function as well.

// Can we create a variable of type number inside a function?
// If yes; We should be able to create a variable of type function inside a function also. (Nested Functions)

// function f1() {
//     function f2() {

//     }
// }

// Can we return a variable of type number from a function?
// If yes; We should be able to return a variable of type function from a function also. (Closure/Currying/HOF) 

// function f1() {
//     function f2() {

//     }

//     return f2;
// }

// Can we pass a variable of type number to a function?
// If yes; We should be able to pass a variable of type function to a function also. (Callbacks)

document.getElementById("btn").addEventListener("click", function () { });