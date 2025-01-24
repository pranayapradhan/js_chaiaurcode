// let myName = "pranaya        "
// let mySurname = "Pradhan            "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.pranaya = function(){
    console.log(`Pranaya is present in all objects`);
    
}

Array.prototype.heyPranaya = function(){
    console.log(`Hello everyone from pranaya`);
    
}

// heroPower.pranaya()
// myHeros.pranaya()
// myHeros.heyPranaya()
// heroPower.heyPranaya() // throws an error because object is the parent of array and cannot access the child prototype



//  Inheritance

const user = {
    name: "pranu",
    email: "pranu@eg.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport  = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport // traditional syntax of inheriting prototype of another object
}

Teacher.__proto__ = user // inheriting prototype


// Modern Syntax 

Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername = "Pranaya Pradhan"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
}

anotherUsername.trueLength()
"pranaya   ".trueLength()
"pranaya".trueLength()