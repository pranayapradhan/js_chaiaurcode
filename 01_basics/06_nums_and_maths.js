const score = 100
// console.log(score);

const balance = new Number(10)
// console.log(balance);

// console.log(typeof score);
// console.log(typeof balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // 10.00


const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));
// console.log(otherNumber.toFixed(2));

const hundreds = 10000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));


// ******************** Maths ************************

// console.log(Math);
// console.log(Math.abs(-7));
// console.log(Math.round(7.5));
// console.log(Math.ceil(7.5));
// console.log(Math.floor(7.5));


console.log(Math.random()); // gives a random value between 0 and 1
console.log((Math.random() * 10) + 1 ); // If I want a random value between 1 and 9
console.log(Math.round(Math.random() * 10) + 1 ); // If I want a random value between 1 and 9 with round


const min = 15
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min)); // between min and max value 

