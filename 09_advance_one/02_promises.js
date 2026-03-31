// creating promise
const promise1 = new Promise(function(resolve, reject){
    // do async task
    // db call
    setTimeout(function(){
        console.log('async task done')
        resolve()
    }, 1000)
})

// consuming promise
promise1.then(function(){
    console.log('promise consumed')
})

// resolve is directly connected to then
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task 2 done')
        resolve()
    },1000)
}).then(function(){
    console.log('promise 2 is consumed')
})


// to pass data from creating promise to then
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'chirag',
            email: 'chirag@google.com'
        })
    },1000)
}).then(function(data){
    console.log(data)
})


// reject is directly connected with catch
//error case
// also chaining and 'callback hell'
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: 'chirag bansal', email: 'chirag@google.com'})
        } else{
            reject("ERROR: Something went wrong")
        }
    }, 2000)
}).then((data) => {
    console.log(data)
    return data.username
}).then( (username) => {
    console.log(username)
}).catch( (error) => {
    console.log(error)
}).finally( () => {console.log('finally everything done either resolve or reject')} )


// async and await function five

const promiseFive = new Promise(function (resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({language: 'JS', complier: 'VSCode', password: '123'})
        } else{
            reject("OOPS JS went wrong")
        }
    } ,2000)
})
// async came here

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
        console.log(response.password)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()



// let us take a small look at the fetch

// async function allUsers(){
//     const response = await fetch('https://api.github.com/users/chiragb3005')
//     const data = await response.json()
//     console.log(data)
// }

// doing with fetch, catch method
// allUsers()


await fetch('https://api.github.com/users/chiragb3005')
.then( (response) => {return response.json()} )
.then( (data) => {
    console.log(data)
    return data.followers
} )
.then( (profile) => {
    console.log(`followers count : ${profile}`)
} )
.catch( (error) => console.log(error) )