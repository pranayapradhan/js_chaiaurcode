// var c = 300
let a = 300

if(true){
    let a = 10
    const b = 20
    // console.log("Inner: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "pranaya"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    
    two()
}

// one()

if(true){
    const username = "pranaya"
    if(username === "pranaya"){
        const website = " youtube"
        console.log(username + website);
        
    }
    // console.log(website);
    
}

// console.log(username);


// ++++++++++++++++++++ Interesting +++++++++++++++++++++++

console.log(addone(4)) // this doesnot gives error because this type of function can be called before initialization

function addone(num){
    return num + 1
}



// console.log(addTwo(4)); // this gives error because this type of function cannot be called before initialization

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(4));

