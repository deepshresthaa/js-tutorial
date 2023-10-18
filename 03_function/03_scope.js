// let and var is differ with its scope handling functionality
let name="deep";
if(true)
{
   let name="shweta"; // here, name is created inside if conditional statement, and its scope is inside this if statement only, so its value cannot be accessed outside this if statement
}
console.log(name);

// but in var
var fname="deep";
if(true)
{
   var fname="shweta"; // var doesnot work as it needs to work, fname is created inside if statement so its value can be accessed inside if statement only but here using var we can accessed its value outside if statement also, this is defect of var 
}
console.log(fname);



/*****scoping concept****/
function myFun()
{
    const username="deep";
    function name()
    {
        const id=11;
        console.log(`Username: ${username} and id is ${id}`);
    }
    name();
};
myFun();
