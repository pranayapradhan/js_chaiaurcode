const coding = ["js", "ruby", "swift", "java", "python"]

// coding.forEach(function (item){
//     console.log(item);
// })


// coding.forEach((item) => {
//     console.log(item);
    
// })


// const printMe = (value) =>{
//     console.log(value);
    
// }
// coding.forEach(printMe)


// coding.forEach( (value, index, array) => {
//     console.log(value, index, array);
    
// })

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Ruby",
        languageFileName: "rb"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    }
]

// myCoding.forEach( (arr) => {
//     console.log(arr.languageFileName);
//     console.log(arr.languageName);
    
// } )

myCoding.forEach( (item) => {
    console.log(`Extension of ${item.languageName} is ${item.languageFileName}`);
    
})