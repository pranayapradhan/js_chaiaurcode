// Dates

let myDate = new Date()
// console.log(myDate);
// console.log((myDate.toDateString()));
// console.log((myDate.toISOString()));
// console.log((myDate.toJSON()));
// console.log((myDate.toLocaleDateString()));
// console.log((myDate.toLocaleString()));
// console.log((myDate.toString()));


// let myCreatedDate = new Date(2025, 5, 6)
// let myCreatedDate = new Date(2025, 5, 6, 7,30)
// let myCreatedDate = new Date("2003-06-05") //In YYYY-MM-DD format
let myCreatedDate = new Date("01-07-2025") //In MM-DD-YYYY format


// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp); //provides time in milisecond
// console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000)); //in second

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday: "narrow"
})