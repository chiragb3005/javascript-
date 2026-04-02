class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username: ${this.username}`)
    }
    // by adding static we stop giving the access to everything
    static createId(){
        return `123`
    }
}
const chirag = new User('chirag')
// console.log(chirag.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const iphone = new Teacher('iphone', 'iphone@google.com')
console.log(iphone.createId())