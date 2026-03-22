// for loop
for (let i = 0; i < 11; i++) {
    const element = i;
    if(element == 5) {
        // console.log('5 is best number')
    }
    // console.log(element)
}

for(let i=0; i<=10; i++){
    // console.log(`Outter loop: ${i}`)
    for(let j=0; j<=10; j++){
        // console.log(`Inner loop : ${j} ,Outer loop : ${i} `)
        // console.log(i + '*' + j + '=' + i*j)
    }
}

let myArray = ['flash', 'batman', 'superman']
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
}

// break and continue

for (let  index=1; index<21; index++) {
    // console.log(index)
    if(index==5){
        break
    }
}
for (let  index=1; index<21; index++) {
    if(index==5){
        console.log('number detected 5')
        continue
    }
    console.log(index)
}