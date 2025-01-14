// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

// Syntax of for of loop
// for (const element of object) { // Here object does not refer to the object of JS rather it referes to the any objects like Array, Object, Stings which is iterable
    
// }

for (const num of arr) {
    // console.log(num);
  
}

const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);  
}

// Maps

// Maps does not have a duplicate data

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}


// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

// [key, value] pair doesnot work for objects on for of loop directly