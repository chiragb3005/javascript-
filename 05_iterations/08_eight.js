// reduce
const myNums = [1,2,3,4,5]

// chceck the syntax of this reduce operator in js
// helps when we have to get total of a cart in projects
const total = myNums.reduce( (acc, currval) => {
    // console.log(`acc: ${acc}, currval: ${currval}`)
    return acc+currval
},0 )
// console.log(total)


// Example

const shoppingCart = [
    {
        courseName: 'JS course',
        price: 2999
    },
    {
        courseName: 'PY course',
        price: 1999
    },
    {
        courseName: 'AI course',
        price: 6999
    },
    {
        courseName: 'data science course',
        price: 12999
    }
]

const totalBill = shoppingCart.reduce( (acc, item) => {return acc + item.price},0 )
console.log(totalBill)