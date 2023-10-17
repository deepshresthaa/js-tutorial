function sayMyName()
{
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
}
sayMyName(); // here sayMyName function is called

// addition of two number using function
function addTwo(num1, num2)
{
    return num1+num2;
}
console.log(addTwo(3,4));

// if one is number another is string then
function sum(num1, num2)
{
    return num1 + num2;
}
console.log(sum(3,"a"));


// 
function isLoggedIn(username)
{
    if(username===undefined)
    console.log("Please enter username.");
    return `${username} just logged in.`;
}
console.log(isLoggedIn("Deep"));

//
function login(username ="sam")
{
    // if(username===undefined)
    // console.log("Please enter username.");
    return `${username} just logged in.`;
}
console.log(isLoggedIn());