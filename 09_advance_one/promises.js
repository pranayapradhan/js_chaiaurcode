const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, cryptography, network calls

    setTimeout(function(){
        console.log("Async task is completed")
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})

// promiseTwo

new Promise((resolve,reject) => {
    setTimeout( () => {
        console.log("Async task two")
        resolve()
    },1000)

}).then(function(){
    console.log("Async two resolved")
})


const promiseThree = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve({username: "Pranaya", email:"Pranaya@eg.com"})
    }, 1000)
})

promiseThree.then( (user) => {
    console.log(user)
})


const promiseFour = new Promise( (resolve, reject) => {
    setTimeout( () => {
        let error = true
        if(!error){
            resolve({usename: "Pranu", password: "1234567890"})
        }
        else{
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})

promiseFour
.then( (user) =>{
    console.log(user)
})
.then( (username) => {
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally( () => console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise( (resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "JavaScript", password: "12345678"})
        } else {
            reject("ERROR: JS went wrong")
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }


// getAllUsers()


fetch("https://api.github.com/users/pranayapradhan")
.then( (response) => {
    return response.json()
})
.then( (data) => {
    console.log(data)
})
.catch( (error) => console.log(error))