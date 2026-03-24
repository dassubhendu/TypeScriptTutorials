/*
Naming Conventions:
- kebab-case: Used for file names (e.g., my-file.ts).
- camelCase: Used for variables and functions (e.g., myVariable, calculateSum).
- PascalCase: Used for classes and interfaces (e.g., MyClass, IUser).
- snake_case: Sometimes used for constants (e.g., MAX_VALUE).
*/

// Variable Declarations and significance of let, const, and var
// let: Used for variables that can be reassigned. It has block scope.
// const: Used for variables that cannot be reassigned. It also has block scope.
// var: An older way to declare variables. It has function scope and can lead to issues like hoisting. It's generally recommended to avoid using var in modern TypeScript.
// Variables can be declared with explicit types or inferred types. TypeScript will infer the type based on the assigned value if no type is specified.
let myVariable: string = "Hello, TypeScript!";
const myConstant: number = 42;
var oldVariable: boolean = true; // Not recommended, use let or const instead
let inferredVariable = "I am inferred as a string"; // TypeScript infers the type as string
// Example for any
let anyVariable: any = "This can be a string";
anyVariable = 123; // Now it can be a number
// Example for unknown
let unknownVariable: unknown = "This can be anything";
unknownVariable = 456;
//null and undefined and significance of null and undefined
// null: Represents the intentional absence of any object value. It is a primitive value that can be assigned to a variable to indicate that it has no value.
// undefined: Represents the absence of a value or an uninitialized variable. It is also a primitive value that is automatically assigned to variables that have been declared but not initialized.
let nullVariable: null = null;
let undefinedVariable: undefined = undefined;
//object and significance of object
// An object is a collection of properties, where each property is a key-value pair. Objects are used to store and organize data in a structured way. In TypeScript, you can define the shape of an object using interfaces or type aliases.
let myObject: { name: string; age: number } = { name: "Alice", age: 30 };
//array and significance of array
// An array is a data structure that can hold multiple values of the same type. In TypeScript, you can define the type of elements in an array using square brackets or the Array<T> syntax.
let myArray: number[] = [1, 2, 3, 4, 5];
let anotherArray: Array<string> = ["Hello", "World"];
//=, ==, === and significance of these operators
// =: Assignment operator, used to assign a value to a variable.
// ==: Equality operator, compares two values for equality after performing type coercion (not recommended due to potential issues with type coercion).
// ===: Strict equality operator, compares two values for equality without performing type coercion (recommended for accurate comparisons).
// The below example is for javascript but in typescript it will give an error because of type mismatch
let a = 5; // Assignment
let b = "5";
//console.log(a == b); // true (due to type coercion)
//console.log(a === b); // false (no type coercion, different types)
// Union types and significance of union types
// Union types allow a variable to hold values of multiple types. This is useful when you want to allow for more flexibility in the types of values a variable can accept.
let unionVariable: string | number;
unionVariable = "This can be a string";
unionVariable = 123; // Now it can be a number as well
// Two ways of declaring arrays in TypeScript
// 1. Using square brackets
let array1: number[] = [1, 2, 3];
// 2. Using Array<T> syntax
let array2: Array<string> = ["Hello", "World"];
// TypeScript also supports tuples, which are fixed-length arrays with specified types for each element.
let tuple: [string, number] = ["Alice", 30];
// So how to declare a tuple with ["Rahul", 25, true]?
let myTuple: [string, number, boolean] = ["Rahul", 25, true];
//Enum and significance of enum
// An enum (short for "enumeration") is a way to define a set of named constants. Enums can make it easier to work with sets of related values and improve code readability.
enum Color {
    Red,
    Green,
    Blue
}
let myColor: Color = Color.Green; // myColor will be 1, as enums are zero-based by default
// You can also assign specific values to enum members
enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Pending = "PENDING"
}
let myStatus: Status = Status.Active; // myStatus will be "ACTIVE"
//object structure and significance of object structure
// Object structure refers to the way objects are defined and organized in TypeScript. It allows you to specify the shape of an object, including its properties and their types. This is important for ensuring type safety and improving code readability.
interface Person {
    name: string;
    age: number;
    isStudent: boolean;
}
let person1: Person = {
    name: "Alice",
    age: 30,
    isStudent: false
};
// You can also use type aliases to define object structures
type Car = {
    make: string;
    model: string;
    year: number;
};
let myCar: Car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
