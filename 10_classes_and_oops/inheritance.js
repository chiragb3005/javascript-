class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password){
        // cause of super no need to give call syntax anymore
        // super will even check this also no need to worry

        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`new course was added by ${this.username}`)
    }
}
const chai = new Teacher('chai', 'chai@google.com', 123)
chai.addCourse()


const masalaChai = new User('masala chai')
console.log(masalaChai)