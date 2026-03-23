const coding = ['js', 'python', 'c++', 'ruby']
coding.forEach( function (val){
    // console.log(val)
    // will print the array
} )

// Arrow function
coding.forEach( (item) => {
    // console.log(item)
} )

function printMe(item){
    console.log(item)
}
coding.forEach(printMe)
// Dont call function only give the refrence 

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr)
} )

const myCoding = [
    {
        languageName: 'Javascript',
        languageFilenName: 'js'
    },
    {
        languageName: 'python',
        languageFilenName: 'py'
    },
    {
        languageName: 'c++',
        languageFilenName: 'cpp'
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
} )