const first = 'chirag-bansal-mahaan'
const last = 'bansal'

// concatenation

console.log(`Hi my name is ${first} ${last}. Nice to meet u all`);
// here used bacticks `` and ${} to insert variables in string

// another way to store string
const gameName = new String('game of thrones')
console.log(gameName.toUpperCase());
console.log(gameName.__proto__); // String {"", constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}
console.log(gameName[0]); // object not array

console.log(gameName.indexOf('b'));
console.log(gameName.charAt(2));

const newString = gameName.substring(0,7)           // one more is there known as  slice() and it can take -ve values also
console.log(newString)

const newString1 = '      chirag        '           // too much unwanted spaces
console.log(newString1.trim()) // removes unwanted spaces from start and end of string


const url = 'https://chiragbansal.com/chirag%20bansal'
console.log(url.replace('%20', '-'))


console.log(first.split('-'));          // splits sting into array based on seprator provide , can also give limit
