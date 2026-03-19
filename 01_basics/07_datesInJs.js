// Dates

// let myDate = new Date()
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());


let createDate = new Date (2026, 2, 19 )
console.log(createDate.toLocaleDateString());

let myTime = Date.now()
console.log(myTime);
console.log(createDate.getTime());
// now i can compare the line 14 & 15 by the difference of the two time stamps


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// console.log(`The month is ${newDate.getMonth()} and time is ${newDate.toLocaleTimeString()}`);


console.log(newDate.toLocaleString('default', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timezone: 'UTC'
}))