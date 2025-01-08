// const tinderUser =  new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Ramey"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Pranaya",
            lastname: "Pradhan"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


// Combining objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = {obj1, obj2, obj3}
// const obj4 = Object.assign(obj1, obj2, obj3)
// const obj4 = Object.assign({}, obj1, obj2, obj3) //first parameter is target and other is source so returning empty object so that no other variable gets affect

const obj4 = {...obj1,...obj2,...obj3} //spread operator (easy and simple to use)
console.log(obj4);


const users = [
    {
        id: 1,
        email: "user1@gmail.com"
    },
    {
        id: 1,
        email: "user1@gmail.com"
    },
    {
        id: 1,
        email: "user1@gmail.com"
    },
    {
        id: 1,
        email: "user1@gmail.com"
    },
    {
        id: 1,
        email: "user1@gmail.com"
    },
]

console.log(users[1].email)

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


