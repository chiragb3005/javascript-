// this keyword & arrow function
 const user = {
    username: 'chirag',
    price : 999, 
    welcomeMessage: function() {
        // console.log(`Welcome to website ${user.username}`);         // user.username will work 
        console.log(`Welcome to website ${this.username}`);         // recommended to use 'this' for highlighting the current working object space 

        console.log(this);              // will print the current context
        
        
    }
 }
//  user.welcomeMessage()
 
 user.username = 'bansal'
//  user.welcomeMessage()
 
//  console.log(this);

// this here will give empty object as in the global we dont have any data which it can refer
// however in browser the this value will be windows itself
 

// +++++++++++++++++++++++ arrow function +++++++++++++++

function chai() {
    let username = 'chirag'
    console.log(this.username);
    console.log(username);
    // here error will come
    // only works like this in objects not in functions

    // console.log(this);
    // here we will get to many values, run to see the surprise
}
chai()


// defining arrow function

const tea = () => {
    username = 'chirag'
    console.log(this.user);
    // still it will not work
}

// arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
const addTwo = (num1, num2) =>  (num1 + num2)


console.log(addTwo(3, 4))

// () => ()                 : arrow function