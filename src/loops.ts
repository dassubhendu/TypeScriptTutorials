/*
While loop - When the number of iterations is unknown.
do-while loop - at least for one time irrespective of the condition.
for loop - number of iterations are known
nesting loop - the placing of one loop inside the body of another loop is known as nesting of loops
while working with nesting loops the outloops will change only when the inner loop is completely finished.      
*/


// =====    While loop - repeats a block of code until the condition is met. =====

//let count: number = 1;

// while(count <= 10){
//     console.log(count)
//     count++;
//}

// ======     do-while.  =======
// do{
//     console.log("Count is: " + count);
//     count++
// }while(count<=10)

//========.    for loop.   =========
// for (let i=1; i<=10; i++){
//     console.log(i);
// }

// ========= Nesting loops ===========
// let numA: number = 0;

// while(numA<3){
//     for (let numB: number = 0; numB < 4; numB++){
//         let numC: number = 0;
//         do{
//             console.log(`numA--->${numA} numB--->${numB} numC--->${numC}`);
//             numC++;
//         }while(numC<5);
//     }
//     numA++;
// }

// ======== for each loops =========
const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit, index) => {
    console.log(index+1 + " I like: " + fruit);
})
