function multiplyBy5(num){
    return num * 5
}
multiplyBy5.power = 2

console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)      // techincally function is also an object

function createUser(name, score){
    this.name = name
    this.score = score
    return name, score
}
// injecting methods of my own on a fucntion
createUser.prototype.increment = function(){
    this.score++
    return this.score
}
createUser.prototype.printMe = function(){
    console.log(`score is: ${this.score}`)
    return
}
// here we didnt tell createUser is having some injecting additional properties
const chai = new createUser('chai', 25)
const tea = createUser('tea', 250)
console.log(chai.increment())