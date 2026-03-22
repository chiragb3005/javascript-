const userEmail = 'c@google.com'

// we didnt make any comparison and pass true 
// userEmail was declared in global enviournment 
if(userEmail) {
    console.log('Got user Email')
}
else {
    console.log('Not having user Email')
}
const userEmail2 = ''

// this time an empty string
// will be consider false
if(userEmail2) {
    console.log('Got user Email 2')
}
else {
    console.log('Not having user Email')
}
const userEmail3 = {}

// this time an empty array
// will be consider true
if(userEmail3) {
    console.log('Got user Email 3')
}
else {
    console.log('Not having user Email')
}


// falsy values 

// false, 0, -0, BigInt 0n, '', null, undefined, NaN

// apart form them all are truthy values


// to check empty array and objet
// RECALL
// Object.keys(object_name) => this comes as an array with key value pair

const array = []
if (array.length===0){
    console.log('empty array')
}
const object = {
    userName : 'chirag'
}
if(Object.keys(object).length===0) {
    console.log('empty object');
}


// nulishing coalescing oeprator (??) : null or undefined
let val1
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 10
val1 = undefined ?? 10 ?? 15
console.log(val1)
// basically either assign value or if we didnt have any then give null/undefined


// Terniary operator
// condition ? true statement : false

const chai = 100
chai>=80 ? console.log('gretaer than 80') : console.log('less than 80')
// this above line is example of terniary operator