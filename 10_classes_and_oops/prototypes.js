const myArr = ['spideman', 'hulk']

const heroPower = {
    hulk: 'muscles',
    spiderman: 'webshoot',

    getGreetings : function(){
        console.log(`power of spiderman is ${this.spiderman}`)
    }
}

// injecting method too all objects in the global env
// injecting in object will also be injecting in arrays and strings
// but the converse is not true
Object.prototype.chirag = function(){
    console.log('chirag is present in all objects')
}

heroPower.getGreetings()
heroPower.chirag()
myArr.chirag()


Array.prototype.bansal = function(){
    console.log('bansal is in all arrays but not objects and strings')
}

myArr.bansal()
// heroPower.bansal()
// this never was able to inject inside the object

// as array gains method when injected in objects this tells the prototype behaviour of JS 

// JS never give up and ask for one gernation before like parent , grand parent, great grand parent and so on ...

// Inheritance

// conecting one to another without classes
const user = {
    username : 'chirag',
    email: 'chirag@google.com'
}

const teacher = {
    makeVideo : true
}
const teachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'make JS assignment',
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user

// coming back to original problem

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`ture length is : ${this.trim().length}`)
}
const name = 'chirag      '
name.trueLength()
'bansal'.trueLength()
