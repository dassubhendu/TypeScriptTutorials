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

/*
This class is used to understand the export, import functionality and it is imported in 
modules.ts file. So we can use this class for understanding oops.ts by removing export from
class.
*/

export function adding(a:number, b:number): number{
    return a+b;
}

export const totalMarks: number = 500;

export class Employee{

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

/* The below section will be used in modules.ts file just to understand export, import functionality.
   If you are working on oops.ts file, please uncomment the below lines.
*/
// const p1 = new Employee("Subhendu", 30);
// p1.welcome();
// console.log(p1.greet());
// let finalNumber = p1.add(20, 30);
// console.log(`This is the final number: ${finalNumber}`);