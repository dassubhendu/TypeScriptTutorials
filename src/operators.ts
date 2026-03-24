/*
Operators in TypeScript are used to perform operations on variables and values. They can be categorized into several types, including:
Static and Dynamic typing in TypeScript
Static typing means that the type of a variable is known at compile time. In TypeScript, you can declare variables with specific types, and the compiler will check for type errors before the code is executed. For example:
let myString: string = "Hello, TypeScript!";
let myNumber: number = 42;
Dynamic typing means that the type of a variable can change at runtime. In JavaScript, which is the underlying language of TypeScript, variables can hold values of any type without any type checking. However, in TypeScript, you can use the 'any' type to allow for dynamic typing when necessary:
let dynamicVariable: any = "This can be a string";
dynamicVariable = 123; // Now it can be a number as well
dynamicVariable = true; // Now it can be a boolean as well
While using 'any' can provide flexibility, it is generally recommended to use specific types to take advantage of TypeScript's type checking and improve code safety and readability.

1. Arithmetic Operators: Used for performing mathematical operations.
   - Addition (+)
   - Subtraction (-)
   - Multiplication (*)
   - Division (/)
   - Modulus (%)
   - Examples
   let a = 10;
   let b = 5;
   console.log(a + b); // 15
   console.log(a - b); // 5
   console.log(a * b); // 50
   console.log(a / b); // 2
   console.log(a % b); // 0

2. Assignment Operators: Used to assign values to variables.
   - Assignment (=)
   - Addition assignment (+=)
   - Subtraction assignment (-=)
   - Multiplication assignment (*=)
   - Division assignment (/=)
   - Examples
   let x = 10;
   x += 5; // x is now 15
   x -= 3; // x is now 12
   x *= 2; // x is now 24
   x /= 4; // x is now 6

3. Comparison Operators: Used to compare two values and return a boolean result.
   - Equal to (==)
   - Not equal to (!=)
   - Strict equal to (===)
   - Strict not equal to (!==)
   - Greater than (>)
   - Less than (<)
   - Greater than or equal to (>=)
   - Less than or equal to (<=)
   - Examples
   let num1 = 10;
   let num2 = "10";
   console.log(num1 == num2); // true (due to type coercion)
   console.log(num1 === num2); // false (no type coercion, different types)
   console.log(num1 > 5); // true
   console.log(num1 < 20); // true
   console.log(num1 >= 10); // true
   console.log(num1 <= 9); // false

4. Logical Operators: Used to combine multiple boolean expressions.
   - Logical AND (&&)
   - Logical OR (||)
   - Logical NOT (!)
   - Examples
   let isAdult = true;
   let hasID = false;
   console.log(isAdult && hasID); // false (both conditions must be true)
   console.log(isAdult || hasID); // true (at least one condition must be true)
   console.log(!isAdult); // false (negation of isAdult)

5. Bitwise Operators: Used to perform bit-level operations on binary numbers.
   - Bitwise AND (&)
   - Bitwise OR (|)
   - Bitwise XOR (^)
   - Bitwise NOT (~)
   - Left shift (<<)
   - Right shift (>>)
   - Unsigned right shift (>>>)
   - Examples
   let bitA = 5; // 0101 in binary
   let bitB = 3; // 0011 in binary
   console.log(bitA & bitB); // 1 (0001 in binary)
   console.log(bitA | bitB); // 7 (0111 in binary)
   console.log(bitA ^ bitB); // 6 (0110 in binary)
   console.log(~bitA); // -6 (inverts the bits of 5)
   console.log(bitA << 1); // 10 (0101 shifted left becomes 1010)
   console.log(bitA >> 1); // 2 (0101 shifted right becomes 0010)
   console.log(bitA >>> 1); // 2 (unsigned right shift, same as >> for positive numbers)

6. Ternary Operator: A shorthand for an if-else statement.
   - Syntax: condition ? expressionIfTrue : expressionIfFalse
   - Example
   let age = 18;
   let canVote = age >= 18 ? "Yes" : "No";
   console.log(canVote); // "Yes"

7. unary Operators: Used to perform operations on a single operand.
   - Unary plus (+): Converts a value to a number.
   - Unary negation (-): Negates a number.
   - Logical NOT (!): Inverts the truthiness of a value.
   - Increment (++) and Decrement (--): Used to increase or decrease a variable's value by 1.   
   - Example:
   let x = 5;
   console.log(+x); // 5 (unary plus)
   console.log(-x); // -5 (unary negation)
   console.log(!x); // false (logical NOT, since 5 is truthy)
   x++; // x is now 6
   x--; // x is back to 5

8. Type Operators: Used to work with types in TypeScript.
   - typeof: Returns the type of a variable or expression.
   - instanceof: Checks if an object is an instance of a specific class or constructor function.
   - Example:
   let str = "Hello";
   console.log(typeof str); // "string"
   class Date {
       // Date class implementation
   }
   let date = new Date();
   console.log(date instanceof Date); // true

9. Nullish Coalescing Operator (??): Returns the right-hand operand when the left-hand operand is null or undefined, otherwise returns the left-hand operand.
   let date = new Date();
   console.log(date instanceof Date); // true

9. Nullish Coalescing Operator (??): Returns the right-hand operand when the left-hand operand is null or undefined, otherwise returns the left-hand operand.

10. Optional Chaining Operator (?.): Allows you to access properties of an object that may be null or undefined without causing an error.

11. Spread Operator (...): Used to expand elements of an iterable (like an array) or properties of an object.

12. Rest Operator (...): Used to collect multiple elements into an array or multiple properties into an object.

Understanding and using these operators effectively can help you write more concise and efficient code in TypeScript.       
*/