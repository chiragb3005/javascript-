// array

const myArray = [0, 1, 2, 3, 4, 5, true, 'chirag']
const myHero = ['ironman', 'spdiderman']

const arr = new Array(1, 2, 3, 4, 5)
// console.log(myArray[3]);

// Array Methods
// myArray.push(6)
// console.log(myArray);
// myArray.pop()
// console.log(myArray);

myArray.unshift(12)         // adds element at the beginning of the array
// console.log(myArray);

myArray.shift()
// console.log(myArray);       
// removes element from the beginning of the array

// console.log(myArray.includes(86));   
// checks if the element is present in the array or not (boolean value)

// console.log(myArray.indexOf(98));    
// returns the index of the element if it is present in the array otherwise returns -1


// const newArr = myArray.join()           
// // converts the array into a string and returns the string

// console.log(newArr);
// console.log(myArray);



// slice & splice

console.log('A ', myArray);
const A1 = myArray.slice(1,3)
console.log(A1)
// will give the list of marked elements come under the range of slice


const A2 = myArray.splice(1,3)
console.log('B ', myArray);
console.log(A2);
// splice will take the elements of range form the actual arraya and then put them in a new array