const userEmail=[]
if(userEmail)
{
    console.log("Got user email.");
}
else
{
    console.log("Donot have user email.");
}

//falsy values
// false, 0, -0, BigInt onabort, "" , null, undefined , NaN 


// truthy values
// "0", "false", " ", [], {}, funtion() {}



// How to check if array is empty or not?
const arr1=[1];
if(arr1.length===0)
{
    console.log("Size of array is 0");
}
else
console.log("Size of an array in not 0");


// checking whether object is empty<>
const obj1={};
if(Object.keys(obj1).length===0)
{
    console.log("Object is empty.");
}
else
console.log("Size of an object in not 0");