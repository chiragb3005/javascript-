// on basis of data kept in memory & then we access it there are 2 types of datatypes
// 1. Primitive data types
// 2. Reference data types or non primitive data type


// primitve
// 7 types: Strig, Number, Boolean, Null, Undefined, Symbol, undefined, BigInt
// null => null is null no specific datatype
// undefined => we havent give the value to variable but have already dexclared it
// symbol => it is used to create unique for objects

const score = 100
const scoreValue = 100.56
const outsideTemp = null;   // normal null means null
// type of null is object but it is not an object it is a primitive data type

let userEmail; // will store this as undefined 

const id = Symbol('123')
const anotherId = Symbol('123')     // even having same they are different because they are unique

console.log(id === anotherId);
console.table({score, scoreValue, outsideTemp, userEmail, id, anotherId})

// refrence
// array, objects, functions

const heroes = ['ironman', 'spiderman', 'thor'];

let myObj = {
    name: 'chirag',
    age: 20,
}   // this is an object literal

// to print array
console.log(heroes);    // datatype of array is object

// to print object
console.log(myObj);

const myFunc = function () {
    console.log("Hello World");
    
}

myFunc()

console.log(typeof heroes); // function is a type of object in js
