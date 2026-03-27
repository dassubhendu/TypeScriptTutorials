/*
What is an object?
An object in TypeScrpt is a collection of key-value pair(Properties), where each key is a string and each value can
be of any type.

Objects can also include methods, which are functions assoicated with the object
*/

let emp_details = {
    name: "Subhendu",
    age: 30,
    isDeveloper: true
};

// object where we can define type for keys
console.log(emp_details.name);

let emp_new: {
    name: string,
    age: number,
    isDeveloper: boolean
} = {
    name: "Subhendu Das",
    age: 42,
    isDeveloper: false

}

// Objects with methods
let car = {

    brand: "BMW",
    speed: 200,
    driver(): string{
        return "Driving very fast!";
    }

};
console.log(car.driver());

// Merge objects
let obj1 = {
    name: "Subhendu",
    age: 30
}

let obj2 = {
    role: "Developer",
    country: "India"
}

let merged = {...obj1, ...obj2}
console.log(merged)
console.log(merged.name)