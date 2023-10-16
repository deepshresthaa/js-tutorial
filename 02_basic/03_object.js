// types singleton and multiple object

//Creating singleton object
// const jsUser=Object.create(
//     {
//         name: "deep",
//         "full-name": "Deep Shrestha",
//         age:20
//     }
// )
// console.log(jsUser.name);
// console.log(jsUser["age"]);
// console.log(jsUser["full-name"]); // this full name cannot be accessed using dot operator

// // creating multiple object
// const obj={

// }


//++++++++++++++Object++++++++++
const mySym=Symbol(11);
const jsUser={
    name:"deep", // here keys like name, age, email is stored in string type
    "full name": "Deep Shrestha",
    age:19,
    [mySym]:"mykey1",
    email: "dipstha1313@gmail.com",
    location: "Tandi, Chitwan",
    isLoggedIn: false,
    lastLoginDays:["sunday", "saturday"]
}
console.log(jsUser.name);
console.log(jsUser["age"]); // here keys are string so we have to user double quote to access it
console.log(jsUser["full name"]);
console.log(typeof mySym);

// freezing --> object.freeze(), so the the value cannot be changed further

jsUser.email="anjali@google.com";
console.log(jsUser.email);

Object.freeze(jsUser); //object.freeze()

jsUser.email="deep@google.com";// here value of email will not be updated because it is freezed.
console.log(jsUser.email);




const JsUser={
    name:"ram ",
    age:54
}
JsUser.greeting=function()
    {
        console.log("Hello js user");
    }
JsUser.greeting2=function()
{
    console.log(`Hello js user, ${this.name}`); // template literal
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());