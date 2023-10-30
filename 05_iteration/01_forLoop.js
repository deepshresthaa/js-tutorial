// basic for loop
for(let i=1; i<=10; i++)
{
    console.log(i);
}

// checking in for looop
console.log("break keyword:___");

for(let i=1; i<=10; i++)
{
    if(i==5)
    {
        break; // break; jumps whole loop
    }
    console.log(i);
}


console.log("continue keyword:___");
for(let i=1; i<=10; i++)
{
    if(i==5)
    {
        continue; // continue; jumps a single iteration
    }
    console.log(i);
}



// array in for loop
console.log("Array in for loop:__");
let myArr=["Deep","Sandip","Sita"];
for(let i=0; i<myArr.length; i++)
{
    console.log(`Members: ${myArr[i]}`);
}