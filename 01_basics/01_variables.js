const accountId = "1223334444"
let accountEmail = "pranaya@google.com"
var accountPassword = "123123123"
accountCity = "Kathmandu"
let accountAmount;

// accountId="1234"

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountAmount])
