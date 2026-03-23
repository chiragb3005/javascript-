// forin
// can be used for iterations in objects
const myObject = {
    js: 'Javascript',
    cpp : 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for (const key in myObject) {
    // console.log(`The key are: ${key} and their respective value is : ${myObject[key]}`)
}

const program = ['js', 'c++', 'ruby']
for (const key in program){
    // console.log(program[key])
}
// for array key is nothing but its index


const map = new Map()
map.set('IN', 'India')
map.set('IN', 'India')      // mpa doesnt allow duplicate values like object
map.set('USA', 'Unted States Of America')
map.set('FR', 'France')
// map is not iterable by forin

for(const key in map){
    console.log(key)
    // no error nothing will print as its not iterable
}