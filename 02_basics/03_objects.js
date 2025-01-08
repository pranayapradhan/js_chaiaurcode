// singleton
// Object.create

// Object literals

const mySym = Symbol("key1")


const JsUser ={
    name: "Pranaya",
    "full name": "Pranaya Sainju", //we cannot access this without []
    [mySym]: "mykey1", // [] is needed for declaring symbol in the object
    age: 21,
    location: "Maitidevi",
    email: "pranaya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "pranaya@yahoo.com"
// Object.freeze(JsUser) // object cannot be changed after freeze
JsUser.email = "pranaya@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){ // Adding function to the object
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){ // Adding function to the object
    console.log(`Hello ${this.name},`);
}

console.log(JsUser.greetingTwo());
console.log(JsUser);
