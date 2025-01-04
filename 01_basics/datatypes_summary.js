// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

let str = "Pranaya" //String

const score = 100  //Number
const scoreValue = 100.00 // Number

const isLoggedIn = true //Boolean
const outsideTemperature = null //object
let userEmail = undefined // undefined


const userId = Symbol("123") //Symbol
const anotherId = Symbol("123") //Symbol

console.log(userId == anotherId);

let bigNumber = 12345678900987654321n  // bigint
console.log(typeof bigNumber);


// Reference (Non Primitive)

// Array, Objects, Functions

const names = ["Pranaya", "Sagar", "Ashish"]

const myObj = {
    name: "Pranya",
    age: 22,
    address: "Maitidevi"
}

const myFunc = function(){
    console.log("Pranaya Pradhan Sainju");
    
}

console.log(typeof(names)); // object
console.log(typeof(myObj)); // object
console.log(typeof(myFunc)); // function
