
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

console.log(LoginUserMessage("Pranaya"));

