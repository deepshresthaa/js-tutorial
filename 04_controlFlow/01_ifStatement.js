// if-statement
const temp=40;
if(temp===40)
{
    console.log("Temperature is 40.");
}



// if-else statement
const isuserloggedin=false;
if(isuserloggedin)
{
    console.log("User already logged in.");
}
else
{
    console.log("You need to register first.")
}


// else- if ladder
const balance=1000;
if(balance<250)
{
    console.log("Your bank balance is less than 250.");
}
else if(balance < 500)
{
    console.log("Your bank balance is less than 500");
}
else if(balance < 1000)
{
    console.log("Your bank balance is less than 1000");
}
else if(balance===1000)
{
    console.log("Your bank balance is equals to 1000");
}
else
{
    console.log("Your bank balance is above 1000");
}


// logical operators ( && ,||)

const userLoggedIn=true;
const haveDebitCard=false;
if(userLoggedIn && haveDebitCard)
{
    console.log("You can purchase the course");
}
else
{
    console.log("Youc cannot purchase the course.");
}