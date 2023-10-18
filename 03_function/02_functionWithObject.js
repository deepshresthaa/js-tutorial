/*******In business website a customer add his product in a cart and website has to calculate total prices , where how many items and price are unpredictable */
function cartPrice(...num)// rest operator converts all passed value to store in an array
{
    return num;
}
console.log(cartPrice(3,34,56,67)); // here any value in this array can be used


// function in an object
const myObj={
    username:"deep",
    age:18
}
const myFun=function(anyfunction)
{
    console.log(`User name is ${anyfunction.username} and age is ${anyfunction.age}`);
}
myFun(myObj); // passing object to a function


// this is also possible
const newFunction=function(anyfunction)
{
    console.log(`My name is ${anyfunction.username}`);
}
newFunction(
    {
        username:"Deep Shrestha"
    }
);


// array in a function
function arrFunction(getArray)
{
    return getArray[1];
}
let ans = arrFunction([2,3,4,5]);
console.log(ans);