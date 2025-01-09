// Immediately Invoked function Expressions (IIFE)

(function connection(){
    // named IIFE
    console.log(`DB connected Successfully`);
    
})();

((dbname) => {
    console.log(`Connected to DB ${dbname}`);
    
})("Pranaya");

// ()(); first is function second is execution