// if-else and switch case

// if-else
const randNumber = Math.floor(Math.random() * 5)   //generate a number between 0 and 4
console.log(randNumber);

if (randNumber > 3){
    console.log(`${randNumber} is greater than 3`)
}else if (randNumber === 3){
    console.log(`${randNumber} is equal to 3`)
}else{
    console.log(`${randNumber} is less than 3`)
}

//switch case
switch(randNumber){
    case 0:
        console.log("Number is ZERO: " + randNumber)
        break;
    case 1:
        console.log("Number is ONE: " + randNumber)
        break;
    case 2:
        console.log("Number is TWO: " + randNumber)
        break;
    default:
        console.log("Number is eaither THREE or FOUR: " + randNumber)
        break;
}