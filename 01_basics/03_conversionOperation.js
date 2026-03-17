// ************************************ Conversion ************************************ //

let score = "chirag";

//console.log(typeof score)

let numberScore = Number(score)
// console.log(numberScore)

// number get convert 33
// NaN when Number function used but it is not possible to convert into number
// also seen boolean and null and undefined

let isLoggedIn = "";
let boolean = Boolean(isLoggedIn)

// console.log(typeof boolean);
// console.log(boolean);

// 1 => true
// 0 => false
// "" => false
// "chirag" => true
// null => false
// undefined => false


// *********************** Operations *************************** //

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+3)
// console.log(2-3)
// console.log(2*3)
// console.log(2**3)
// console.log(2/3)

let a = "Chirag"
// console.log(a + " Bansal");


let x = "1" + 2
// console.log(x);

// 122
// console.log("1" + 2 + 2);

// 32
// console.log(1 + 2 + "2");
// prefer by which data type u r passing firstly then it will perform the operation accordingly


let gameCounter = 100
gameCounter++
console.log(gameCounter);