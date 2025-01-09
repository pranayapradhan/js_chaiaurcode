const user ={
    username: "Pranaya",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to the website`);
        console.log(this);

    }

}
// user.welcomeMessage()
// user.username = "Ram"
// user.welcomeMessage()

// console.log(this);


// function demo(){ // We cannot use this keyword in function
//     let username = "Pranaya"
//     console.log(this.username);
    
// }

// demo()

// const demo = function(){
//     let username = "Pranaya"
//     console.log(this.username);
// }


const demo = () => {
    let username = "Pranaya"
    console.log(this);
    
}

// demo()

// const addTwo = (num1, num2) =>{
//     return num1 +  num2            // explicit return
// }

// const addTwo = (num1, num2) => num1 +  num2 // Implicit return / no need to write return keyword

// const addTwo = (num1, num2) => (num1 +  num2)

const addTwo = (num1, num2) => ({username: "Pranaya"}) // returning object in arrow function

console.log(addTwo(8,5));


// const myArray = [1, 2, 3, 4, 5, 6, 7]

// myArray.forEach(function(){})
// myArray.forEach(() => {})
// myArray.forEach(() => ())