// for of
// array specific loop
// ['', '', '']
// [{}, {}, {}]

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num)
}
const greetings = 'hello world!'
for (const greet of greetings) {
    if (greet == ' '){
        continue
    }
    // console.log(`each char is : ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', 'India')
map.set('IN', 'India')      // mpa doesnt allow duplicate values like object
map.set('USA', 'Unted States Of America')
map.set('FR', 'France')
// console.log(map)

for (const [key, value] of map) {       // syntax for storing key value differently to use them appropriately
    // console.log(key, ':-', value)
}

const myObject = {
    game1: 'bgmi',
    game2: 'spiderman'
}
 
for (const [key, value] of myObject) {
    // console.log(key)
}
// for of not iterable with forof