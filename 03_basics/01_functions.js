// console.log('c');
// console.log('h');
// console.log('i');
// console.log('r');
// console.log('a');
// console.log('g');


function sayMyName() {
    console.log('c');
    console.log('h');
    console.log('i');
    console.log('r');
    console.log('a');
    console.log('g');
}

// sayMyName()


function addTwoNumbers(x, y) {
    // let result = x+y
    // return result

    return x+y
}

const result = addTwoNumbers(5,3)
// console.log(result);


function loginUserMessage(username = 'user') {
    if(username==undefined){
        console.log('Please Enter a name');
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage());



// starting of different topic for now

// here ... works as rest operation not spread operation
// one can call it uno reverse
function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
console.log(calculateCartPrice(200,300,400));

let user = {
    username: 'chirag',
    age: '20'
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and age is ${anyObject.age}`);
    return
}
handleObject(user)