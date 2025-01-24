function setUsername(username){
    // complex DB calls
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    // setUsername(username) // this line is calling the function but the function is not returning the value because 'this' keyword refers to its content/object and removes the value after execution rather than returning it.
    setUsername.call(this, username) // so here the call prototype is used passing 'this' keyword as an argument because it refers to the current object where the value is returned after the execution of the function.

    this.email = email
    this.password = password
}

const pranu = new createUser("Pranay", "Pranu@fb.com","12345678")
console.log(pranu);

