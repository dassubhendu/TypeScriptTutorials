/* 
Exception handling
Arithmetic exception
Array out of bound exception
File not found exception

try - A block of code where exception occcures
catch - A block of code where we handle exception
finally - A block of code that will always execute
throw - A statement to exlicitely throw an exception

We also have main() method in Type Script, you need to call the main() method outside of the class.
*/

class Exceptions{

    static validateNumber(number: number): void{

        if (number < 0){
                throw new Error("Number must be non-negative");   
        }

    }

    static main(): void{

        try{
            this.validateNumber(-1);
        }catch(e: any){
            console.log("Validation error: " + e.message);
        }

        try{
            const numbers = [1,2,3,4,5];
            console.log(numbers[6].toString());
        }catch(e: any){
            console.log("An error occured in the array index: " + e.message);
        }

        try{

            const a = 10;
            const b = 0;
            const result = a/b; // gives to infinity

            if (!isFinite(result)){
                throw new Error("Division by 0 is not allowed");
            }

        }catch(e: any){

            console.log("An error occured : " + e.message);

        }finally{
            console.log("This will always be executed!")
        }

    }

}

Exceptions.main()
