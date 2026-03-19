const tinderUser = new Object()           // singleton object 
// const tinderUser = {}                   // non singleton object

tinderUser.id = '123abc'
tinderUser.name = 'chirag'
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email : 'some@gmail.com',
    fullname: {
        userFullName: {
            firstName: 'sahil',
            lastname: 'bansal'
        }
    }
}               
// nested objects

// console.log(regularUser.fullname.userFullName.firstName);


const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}
// const obj3 = Object.assign({}, obj1, obj2)              // for merging of objects like did in array

const obj3 = {...obj1, ...obj2}                             // spread operator for merging is more better way
// console.log(obj3);


const user = [
    {
        id: 'c@gmail.com',
        age: 20
    },
    {
        id: 'c@gmail.com',
        age: 20
    },
    {
        id: 'c@gmail.com',
        age: 20
    }
]

console.log(Object.keys(tinderUser));
// will give only keys of the object
console.log(Object.values(tinderUser));
// will give only values of the object
console.log(Object.entries(tinderUser));
// will give each key value in form of array entry

console.log(tinderUser.hasOwnProperty('isLooggedIn'));
// to check whether an key is present or not