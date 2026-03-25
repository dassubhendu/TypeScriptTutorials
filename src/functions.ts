
// Function without return type and parameter.
function printHello(): void{
    console.log("Hello world");
}

printHello();

// Function with parameter and without return type.
function log(msg: string): void{
    console.log(msg)
}

log("Hello message")

// Function with return type
function greet(name: string): string{
    return `Hello, ${name}!`;
}

let name = greet("Saurav")
console.log(name);
console.log(greet("Subhendu"));

// Fucntion with multiple parameter and return type
function addition(a: number, b: number): number{
    return (a + b);
}

let result = addition(2, 3)
console.log("Addition of these two numbers is: " + result);

// Optional parameters
function welcome(name: string, age?: number): string{
    return age? `Hello, ${name}, age ${age}` : `Hello ${name}`;
}

let newText = welcome("Subhendu");
console.log(newText);

let newText1 = welcome("Subhendu", 35)
console.log(newText1)

// Arrow function
const multiplyArrow = (x: number, y: number): number => x * y;

let mulResult = multiplyArrow(10, 20);
console.log(mulResult)

// Function overloading
function combine(a: string, b:string): string;
function combine(a: number, b:number): number;
function combine(a: number, b: string): string;
function combine(a: number, b: string, c?:number): string;
function combine(a: any, b: any): any{
    return a + b;
}

console.log(combine("Subhendu", "Das"))
console.log(combine(1, 10));
console.log(combine(1, "Subhendu"))
console.log(combine(1, "Subhendu", 35))



