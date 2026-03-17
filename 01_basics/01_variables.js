const accountId = 144553
let accountEmail = "chirag123@gmail.com"
var password = "12345"
accountCity = "Pune"
let accountState = "Maharashtra";

// accountId = 2 // not allowed as accountId is a constant variable
// console.log(accountId);

accountEmail = "hdfc@okgmail.com"
password = "148121"

console.table({accountEmail, password, accountCity, accountId, accountState})
// print each value on its own line
console.log([accountEmail, password, accountCity, accountId, accountState].join("\n"))

// prefer not to use var cause of the issue of scope '{}'