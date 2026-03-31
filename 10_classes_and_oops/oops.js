// object literal
const user = {
    username: 'chirag',
    loginCount: 8,
    isLoggedIn: true,

    getUserDetails: function(){
        console.log(this.username)
    }
}
console.log(user.username)
user.getUserDetails()

// construtor function
// using new as a construtor here
function data(username, loginCount, isLoggedIn){
    this.username = username,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn
    // return this

    this.greetings = function(){
        console.log(`greetings ${this.username}`)
    }

}
// asking for new instructor
const userOne = new data('chirag', 12, true)
const userTwo = new data('bansal', 11, false)
console.log(userOne)
console.log(userTwo)
userOne.greetings()
// new creates an object which is called instance
// constructor function call due to 'new'
// 'this' takes everything injecting itself
// at last we get everything
