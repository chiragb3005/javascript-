class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get password() {
        return `${this._password}chirag`
    }

    set password(value) {
        this._password = value
    }
}
const chai = new User ('chirag@google.com', '123')
console.log(chai.password)