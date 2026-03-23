const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// Map returns the value for store in different variables
const newNums = myNumbers.map( (num) => {return num + 10} )
const print = myNumbers.filter( (num) => {return num + 10} )
// filter used for conditions and it return values to store unlike forEach
// console.log(newNums);
// console.log(print)      // Undefined will come

const arr = []
myNumbers.forEach( (number) => {
    number = number+10
    arr.push(number)
} )
// console.log(arr)


// Chaining
const chain = myNumbers
                    .map( (num) => num=num*10 )
                    .map( (num) => num+1)
                    .filter( (num) => {return num>=50} )
//value of num changes after every map
console.log(chain)