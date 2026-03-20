// {} => scope and object declaration both
// {} => when come with if/else or function is the scope of them
let b = 200
// var b = 20

if(true) {
    let a = 10
    let b = 20
    // console.log('INNER: ', b);
    // different b depending on local and global scope


    const c = 30
}      
 //  whatever written in if statement is local scope and outside it is global scope

// console.log(b);

// here b changed so dont use var use let
// console.log(c);
// let inside global and local scope are 2  different variables declaration


// NESTED SCOPE


function one() {
    const username = 'chirag'

    function two() {
        const website = 'youtube'
        console.log(username);
        
    }
    // console.log(website);
    // two cannot access the one function variables 

    two()
}
// child function can call parent function varibles but reverse is not true

if (true) {
    const name = 'chirag '
    if(true) {
        const site = 'youtube'
        // console.log(name + site);
        
    }
    // console.log(site);
    
}
// console.log(name);


// ++++++++++++++++++++++++++ Interseting +++++++++++++++++++

console.log(addOne(8));
function addOne(num) {
    return num + 1
}

console.log(addTwo(8));
// not accessable due to storing the function into data type
const addTwo = function(num){
    return num + 1
}

