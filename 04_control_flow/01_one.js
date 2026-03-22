// if

const isUserLoggedIn = true
const temp = 47
if(temp<40) {
    console.log('temperature less than 40');
    
}
else {
    console.log('temperature greater than 40');
    
}

const score = 200
// if(score > 100) {
//     const power = 'fly'
//     console.log(`power of score is: ${power}`);
//     // power cant be used outside scope
//     // dont use var so u use it as global scope as well
// }

const balance = 1000
// if(balance < 500) {
//     console.log('greater than ');
    
// }
// else if (balance < 750){
//     console.log('less than 750');
// }
// else {
//     console.log('less than 1200');
// }


const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userloggedIn & debitCard) {
    if(loggedInFromEmail || loggedInFromGoogle) {
        console.log('user logged in');
        
    }
}