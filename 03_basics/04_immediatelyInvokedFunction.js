// Immediately Invoked Function Expressions(IIFE)
(function chai(){
    console.log("DB connected.")
})();


// IIFE in arrow function
(  (name)=>{
    console.log(`DataBase accessed successfully! , ${name}`);
})("Deep");

