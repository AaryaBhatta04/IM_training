// Function Creation
// function <FunctionName>(<Parameters>) {
//     <Function Body>
// }

// Function Call
// <FunctionName>(<Arguments>)

// function hello(person_name) {
//     console.log(`Hello, ${person_name}`);
// }

// hello('Manish');
// hello(10);
// hello();
// hello("Manish", "Sharma");

// ------------------------------------------ Handle less number of Arguments and type
// function add(a, b) {
//     a = a || 0;
//     b = b || 0;

//     if(typeof a !== "number" || typeof b !== "number")
//         throw new Error("Invalid Arguments");

//     return a + b;
// }

// // Default Paramaters
// function add(a = 0, b = 0) {
//     if(typeof a !== "number" || typeof b !== "number")
//         throw new Error("Invalid Arguments");

//     return a + b;
// }

// console.log(add(2, 3));
// console.log(add(2));
// console.log(add());

// try {
//     console.log(add("ABC", 2));
// } catch(e) {
//     console.error(e.message);
// }

// ------------------------------------------ Handle extra number of Arguments
// function hello(person_name) {
//     console.log(`Hello, ${person_name}`);
//     console.log(arguments)
// }

// ----------------- Rest Parameters
// function hello(person_name, ...args) {
//     console.log(`Hello, ${person_name}`);
//     console.log(args)
// }

// hello('Manish');
// hello('Manish', 'Sharma');
// hello('Manish', 'Sharma', 'Pune');
// hello('Manish', 'Sharma', 'Pune', 'MH');


// -------------------------------------- Variable Arguments
function average(...numbers) {
    console.log(numbers);
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }

    if (numbers.length === 0)
        return sum;
    else
        return sum / numbers.length;
}

console.log(average());
console.log(average(1));
console.log(average(1, 2));
console.log(average(1, 2, 3, 4, 5));
console.log(average(1, 2, 3, 4, 5, 6, 7, 8, 9));

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(average(...arr));       // Array Spread (Spread Operator)

// Rest - Convert comma seperated items to an array
// Spread - Convert array to comma seperated items

// ... used at the time of fn creation (in Fn Parameters) - Rest Parameter
// ... used at the time of fn call - Spread Operator

// If we use, ... operator, on the lefthand side of assignment operator - Rest Operator
// If we use, ... operator, on the righthand side of assignment operator - Spread Operator

// --------------------------------------- String Literals
// var fname = "Manish"
// var lname = "Sharma"
// var greetings = "Hello"

// // var greetMsg = greetings + ",\n" + fname + " " + lname + "!";
// var greetMsg = `${greetings},
//     ${fname} ${lname}!`;

// console.log(greetMsg);