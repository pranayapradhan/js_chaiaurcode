const score = 100
console.log(score);

const balance = new Number(10)
console.log(balance);

console.log(typeof score);
console.log(typeof balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // 10.00


const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));
console.log(otherNumber.toFixed(2));

const hundreds = 10000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));
