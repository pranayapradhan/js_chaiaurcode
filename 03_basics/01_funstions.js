
function sayMyaName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("Y");
    console.log("A");
}

// sayMyaName()


// function addTwoNumbers(number1, number2){
//     console.log("number1 + number2")
// }

// function addTwoNumbers(number1, number2){
//     let result = number1 + number2
//     return result
// }

function addTwoNumbers(number1, number2){
    return number1 + number2
    
}

const result = addTwoNumbers(3,5)

// console.log("Result = ", result);


function LoginUserMessage(username = "Sam"){
    if(!username){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in.`
}

// console.log(LoginUserMessage());
// console.log(LoginUserMessage("Pranaya"));


// function calculateCartPrice(...num1){ // ... is rest operator which return an array of element
//     return num1
// }

function calculateCartPrice(val1, val2, ...num1){ // here first two element are passed on val1 and val2 and another elements are passed on num1 as array
}

// console.log(calculateCartPrice(200, 3000, 4000, 3400));


const user = {
    username: "Pranaya",
    price: 599
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({
    username: "Pradhan",
    price: 499
})

const myNewArray = [404, 808, 403, 405]

function returnFirstValue(getArray){
    return getArray[0]
}

// console.log(returnFirstValue(myNewArray));
console.log(returnFirstValue([100, 200, 300, 400]));

