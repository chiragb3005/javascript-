// interview realted question in once a time

// console.log(Math.PI)
// Math.PI = 56
// console.log(Math.PI)

const descruptor = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(descruptor)

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true
}
console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: false
// })
// console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

for (let [key, value] of Object.entries(chai)) {
    console.log(`${key}, ${value}`)
}