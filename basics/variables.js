const accountId = 12435
let accountEmail = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "Hyd"
let accountState

// accountId = 2 //not allowed
accountEmail = "a@b.com"
accountPassword = "21334"
accountCity = "Banglore"

/*
prefer not to use var cz of its block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
console.log(accountId);
