//arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Thor", "Spiderman"]

const myArr2 = new Array(1,2,3,4)

// console.log(myArr[3]); 


// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //adds element at first of the array
// myArr.shift() // removes first element from the array

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));

const newArr = myArr.join() //  join changes array into string

console.log(myArr);
console.log(newArr); 


console.log("A ", myArr);

const myn1 = myArr.slice(1,3) //slice doesnot change the original object

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3) // splice changes the original object
console.log(myn2);

console.log("C ",myArr);
