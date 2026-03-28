/*
Variable scope and access modifiers
*/

class EmplpoyeeDetails{

    public name: string; // instance variable, is accessed via instance of a class
    private salary: number;
    protected department: string;
    static message: string = "Welcome to the organization" //static variable, it belong to the class itself and not to the instance

    constructor(name: string, salary: number, department: string){
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    /* This method also can be public, private, protected and if we do not specify any of those
       by-default it would be public.
    */
    getSalaryDetails(): string{
        let emp_name: string = "Subhendu"; // Local variable: it's scope is only inside method and can't be accessed using class instance.
        return `${this.name}'s salary is ${this.salary}, ${emp_name}`;
    }

}

const ed = new EmplpoyeeDetails("Subhendu", 10000, "Automation_Architect");
console.log(ed.name);  // Public access modifier can be accessed anywhere outside the class
//console.log(ed.salary); // Private access modifier can be access within the class only
//console.log(ed.department); // Protected access modifier can be access within the class and it's subclasses.
console.log(ed.getSalaryDetails());
console.log(EmplpoyeeDetails.message); // Static variable can be call by using class name as it belongs to class and not instance


