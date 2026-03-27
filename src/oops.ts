/*
Classes and oops

Classes
Acccess modifiers (public, private, protected)
Export (how to access classes/functions in a different file)
Inheritence
Abstract Classes
Interface

Classes: A class is a blueprint for creating objects with properties (data) and methods, functions


*/

class Employee{

    emp_name: string; // Instance variable
    age: number;

    constructor(emp_name: string, age: number){
        this.emp_name = emp_name;
        this.age = age;
    }

    welcome(): void{
        console.log("Welcome the Employee");
    }

    add(a: number, b: number): number{
        return a + b;
    } 

    greet(): string{
        return `Hello, I'm ${this.emp_name}`
    }

}

const p1 = new Employee("Subhendu", 30);
p1.welcome();
console.log(p1.greet());
let finalNumber = p1.add(20, 30);
console.log(`This is the final number: ${finalNumber}`);