// Let's create a 2x3 2D array

/*
The first block[] represents rows and secnd block[] represents particular value in that row. 
*/
const myArray: number[][] = [

    [10,11,12],
    [13,14,15]

];

// The below example shows myArray[1] targets 2nd row in 2D array and myArray[1][1] targets 2nd value of 2nd row.
console.log(myArray[1][1]);
console.log(myArray.length); // It returns number of rows.

// Iterate through 2D array
for(let i=0; i<myArray.length; i++){
    for(let j=0; j<myArray[i].length; j++){
        console.log(myArray[i][j]+ " ");
    }
    console.log();
}

