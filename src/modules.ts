/*
What are modules?

Modules are individual files in TypeScript. Anything declared in one module is scoped to that file
only unless explicitely exported.

In this example we are importing the class as that has been exported from oops.ts file.
Also we can import other functions and variables if those are outside of class in same
file but exported. Please refer oops.ts file.

*/

import { Employee, adding, totalMarks } from "./oops";

const p1 = new Employee("Subhendu", 30);
p1.welcome();
console.log(p1.greet());
let finalNumber = p1.add(20, 30);
console.log(`This is the final number: ${finalNumber}`);

adding(50, 30);
console.log(totalMarks);