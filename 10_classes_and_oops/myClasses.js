// // ES6

// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
// }
// const chai = new user('chirag', 'chirag@google.com', '123')
// console.log(chai.encryptPassword())


// behind the scene

function user(username, email, password){    
    this.username = username
    this.email = this.email
    this.password = password
}
user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
const tea = new user('tea', 'tea@google.com', '123')
console.log(tea.encryptPassword())