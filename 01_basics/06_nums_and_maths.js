// *********************** NUMBERS *********************

const score = 100
// console.log(typeof score) // primitive data type

const newBanalnce = new Number(400)
// console.log(typeof newBanalnce);    
// returns object because we have created number using constructor function Number() and it is not a primitive data type it is non-primitive data type

// console.log(newBanalnce);
// console.log(newBanalnce.toString());
// console.log(newBanalnce.toFixed(2));
// console.log(typeof newBanalnce);


const otherNumber = 279.6847
// console.log(otherNumber.toPrecision(4));


const zeroes = 100000000
// console.log(zeroes.toLocaleString('en-IN'));
// will give commas in zeroes according to indian system of number
// can also change the indian format in bracket

// console.log(Number.MAX_SAFE_INTEGER);






// *********************** MATHS *********************

// console.log(Math.abs(-5));    
// // absolute value
// console.log(Math.round(4.6)); 
// // rounds to nearest integer
// console.log(Math.ceil(4.2));  
// // rounds up to nearest integer
// console.log(Math.floor(4.8)); 
// // rounds down to nearest integer
// console.log(Math.min(3, 5, 1, 8)); 
// // returns minimum value
// console.log(Math.max(3, 5, 1, 8)); 

// // returns maximum value 


// console.log(Math.floor(Math.random() * 6 + 1));    
// // returns a random number between 0 and 
// console.log(Math.random().toFixed(1) * 6 + 1); 
// // returns a random number between 1 and 6 (like a dice roll)


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min));
// returns a random number between min and max (inclusive)
