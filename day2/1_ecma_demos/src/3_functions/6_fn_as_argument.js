// let employees = [
//     { id: 1, name: "Manish", city: "Pune" },
//     { id: 2, name: "Neeraj", city: "Delhi" },
//     { id: 3, name: "Abhijeet", city: "Pune" }
// ];

// // -------------------
// // let pune_employees = [];

// // for(let i=0;i < employees.length; i++) {
// //     if(employees[i].city === "Pune") {
// //         pune_employees.push(employees[i]);
// //     }
// // }

// // console.log(pune_employees);

// // // ----------------------
// // let pune_employees = [];

// // function filterLogic(item) {
// //     return item.city === "Pune"
// // }

// // for(let i=0;i < employees.length; i++) {
// //     if(filterLogic(employees[i])) {
// //         pune_employees.push(employees[i]);
// //     }
// // }

// // console.log(pune_employees);

// // // ----------------------
// // function filterLogic(item) {
// //     return item.city === "Pune"
// // }

// // let pune_employees = employees.filter(filterLogic);

// // console.log(pune_employees);

// // // ----------------------

// // let pune_employees = employees.filter(function (item) {
// //     return item.city === "Pune"
// // });

// // console.log(pune_employees);

// // // ----------------------

// // let pune_employees = employees.filter((item) => {
// //     return item.city === "Pune"
// // });

// // console.log(pune_employees);

// // ----------------------
// let pune_employees = employees.filter(item => item.city === "Pune");
// console.log(pune_employees);

let largeData = [];

for (let i = 0; i < 1_000_000; i++) {
    largeData.push({ id: i, name: "manish" });
}

console.time("for-loop");

let result1 = [];
for (let i = 0; i < largeData.length; i++) {
    result1.push({
        ...largeData[i],
        name: largeData[i].name.toUpperCase()
    });
}

console.timeEnd("for-loop");

console.time("map");

let result2 = largeData.map(item => ({
    ...item,
    name: item.name.toUpperCase()
}));

console.timeEnd("map");