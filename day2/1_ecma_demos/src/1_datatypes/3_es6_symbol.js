// let a = 10;
// a = 20;

// console.log(a)

// let a = new Number(10)
// console.log(typeof a)

// ------------------------------------------------
// let a = 10;
// let b = "10";

// console.log(a)
// console.log(typeof a)

// console.log(b)
// console.log(typeof b)

// console.log(a == b)
// console.log(a === b)

// -----------------------------
// const color = "red";

// function isRedColor(arg) {
//     return arg === color;
// }

// console.log(isRedColor(color));

// let clr = "red";
// console.log(isRedColor(clr));

// console.log(isRedColor("red"));

// // --------------
// const color = { code: "red" };

// function isRedColor(arg) {
//     return arg === color;
// }

// console.log(isRedColor(color));

// let clr = { code: "red" };
// console.log(isRedColor(clr));

// console.log(isRedColor({ code: "red" }));

// ----------------------------- Symbol
const color = Symbol("red");

function isRedColor(arg) {
    return arg === color;
}

console.log(isRedColor(color));

let clr = Symbol("red");
console.log(isRedColor(clr));

console.log(isRedColor(Symbol("red")));
