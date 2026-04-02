class User {
    constructor(email, password) {
        this._email = email
        this._password = password
    }

    get password() {
        return `${this.__password}chirag`
    }

    set password(value) {
        this.__password = value
    }
}
const chai = new User ('chirag@google.com', '123')
console.log(chai.password)