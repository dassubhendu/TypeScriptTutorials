/*
1. Arrays are the collection of similar data types
2. Each variable in an array is referrenced by a particular integer number which is known as array index
3. The very first index of an array always starts from 0 and the last index is length - 1
*/
const array1: number[] = [1,2,3,4,5,6];
console.log(array1.length);
console.log(array1[4]);

const numbers: number[] = new Array(10);

/* Manually we can add values in a array
numbers[0] = 1;
numbers[1] = 2;
numbers[9] = 10;
*/

for(let i:number=0; i<numbers.length; i++){
    numbers[i] = Math.floor(Math.random()*100)+1; 
    //console.log(numbers[i]);
}

// If we want to print the above numbers out of this for loop we can use for-of mechanism

for(const number of numbers){
    console.log(number);
}

console.log("--------Printing reverse values from an array----------");
for(let i=numbers.length-1; i>=0; i--){
    console.log(numbers[i])
}