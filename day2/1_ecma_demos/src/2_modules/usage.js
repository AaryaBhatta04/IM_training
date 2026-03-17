// // Case 1 - Default Import
// // import square from './lib.js'
// // console.log("Square: ", square(20))

// // import sqr from './lib.js'
// // console.log("Square: ", sqr(20))

// import * as lib from './lib.js'
// console.log("Square: ", lib.default(20))

// Case 2 - Named Import
// import { square } from './lib.js'
// console.log("Square: ", square(20))

// import { square as sqr } from './lib.js'
// console.log("Square: ", sqr(20))

// import * as lib from './lib.js'
// console.log("Square: ", lib.square(20))

// Case 3 - Multiple Import
import square, { check, test } from './lib.js';
console.log("Square: ", square(20))
console.log("Check: ", check(20));
console.log("Test: ", test(20));