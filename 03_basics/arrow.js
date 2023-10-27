/* const user={
    username:"Deep",
    price:1,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website.`);
    }
}
user.welcomeMessage();

user.username="ram";*/
// user.welcomeMessage();

//
const chai=function()
{
    let username="Deep"
    console.log(this.username);
}
chai();



//arrow function
const chaii= () => {
    let username="Deep"
    console.log(this.username );
}
chaii();



const users = (num1,num2)=>{
    return num1+num2
}
console.log(users(3,4));


//implicit arrow function,no need to write return in function
const add=(num1,num2)=>(num1+num2);
console.log(add(1,2));

// returning object
const addTwo=()=>({username:"Deep"})
console.log(addTwo());