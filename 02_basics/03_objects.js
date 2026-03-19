// singleton

// object literals
// Object.create       
// singleton wala will not talk abt it today
const mySymbol = Symbol('key')

const jsUser = {
    name: 'chirag',
    'full name': 'Chirag Bansal',
    // here full name is declared as perfect stirng so cant access it with DOT(.)
    age: 20,
    [mySymbol] : 'hehehe',
    // using square brackets to access the symbol
    location: 'delhi',
    email: 'chirag@google.com',
    isLoggedIn: false,
    lastLoginDay: ['Monday', 'Saturday']
}
// console.log(jsUser.email);
// not a helpful way to access the object
// console.log(jsUser['email']);
// here email we have to  tell it is a string also a key whose value will be printed later
// console.log(jsUser['full name']);
// console.log(typeof jsUser[mySymbol]);

jsUser.email = 'chiragb@google.com'
// Object.freeze(jsUser)
jsUser.email = 'ncdn@google.com'
// console.log(jsUser);


jsUser.greeting = function() {
    console.log('hello JS user');
}


jsUser.greetingTwo = function() {
    console.log(`hello JS user ${jsUser[this["full name"]]}`);
}

jsUser.greeting();
jsUser.greetingTwo();