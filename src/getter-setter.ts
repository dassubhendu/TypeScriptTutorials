/*
get salary() lets you access the private _salary like a normal property.
set salary() lets you assign a value with some custom logic .
You do not call them like functions -- no () is required.
*/


class Employee{

    private _salary: number = 0;

    get salary(): number{

        console.log("Getting salary");
        return this._salary;

    }

    set salary(amount:number){

        if(amount > 0){
            console.log(`Setting salary to ${amount}`);
            this._salary = amount;
        }else{
            console.log("Invalid salary amount");
        }
    }

}

let emp = new Employee();
emp.salary = 100000; // Calls setter function.
console.log(emp.salary) // Calls getter function.
emp.salary = -1000;