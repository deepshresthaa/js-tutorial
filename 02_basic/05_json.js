// destructuring of object 
/* why do we do destructuring*/
// in object when we have to access the data then we have to use objectname.key, which makes code dirty so in order to access the value with key name only we use destructuring
const course = { 
    name:"Deep Shrestha",
    age: 19,
};
const {name}=course
console.log(name);

// changing name of key also possible; see below
const myPersonal = { 
    name:"Shweta khanal",
    age: 19,
};
const {name: myName}=myPersonal
console.log(myName);



/******json******/

1.) Api in object
{
    "name":"Deep Shrestha", // in api object key is written inside double quote
    "age": 19,
}

2.)Api in array
[
    {

    }
]