function setUsername(username){
    this.username = username
}

function createUser(username, email, password){
    setUsername.call(this, username)
    // with this force to call the setusername function to createuser object and put data in it    
    this.email = email
    this.password = password
}

// if new is not given then everyhting will go to window and not in chai
// new is needded to add them in a object named chai
const chai = new createUser('chai', 'chai@google.com', 123)
console.log(chai)