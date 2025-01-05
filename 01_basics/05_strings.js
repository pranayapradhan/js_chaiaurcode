const name = "Pranaya"
const value = 10

// console.log(name + value + "Value");

console.log(`Name is ${name} and value is ${value}`); // It's better to follow this concept rather than the upper one 

const objGame = new String("PranayaGamesDotCom")

const gameName = "pranaya-hc-com"

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf("a"));

const newString = gameName.substring(0,7) // We cannot use negative indexing on substring
console.log(newString);

const anotherString = gameName.slice(0,-8)
console.log(anotherString);


const newStringOne = "    Pranaya    "
console.log(newStringOne);
console.log(newStringOne.trim()); // removes whitespace


const url = "https://pranaya.com/pranaya%20pradhan"

console.log(url.replace('%20',"-"));

console.log(url.includes("pranaya"));

console.log(url.split("/"));





// reverse a string 

const nameOne = "Pranaya"
console.log(nameOne.split('').reverse().join(''))