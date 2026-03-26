/*
What are tuples?

-> A tuple is a fixed length, ordered array where each element can have a different type.
-> Unlike regular Arrays that allow multiple values of the same type.
-> Tuples let you define the exact type and number of elements

*/

let employee: [number,string] = [101, "Subhendu"];
console.log(employee[0]); // 101
console.log(employee[1]); // Subhendu

// Tuple with optional elements
let data1: [string, number?] = ["Subhendu"];

// Tuple with spread = if we specify '...string[]', we can give multiple strings for the same
let rgb: [number,number,number,...string[]] = [255,0,0, "Red", "Bright", "Dark"]
console.log(rgb[3])

//Merge two tuples
let tuple1: [string, number] = ["Rahul", 30];
let tuple2: [boolean, string] = [true, "India"];

let mergeTuple = [...tuple1, ...tuple2];
console.log(mergeTuple);
console.log(mergeTuple[2])