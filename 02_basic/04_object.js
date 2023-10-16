const tinderUser={}; // creating object with name as tinderUser
tinderUser.id="123xyz";
tinderUser.name="hari";
tinderUser.isLoggedIn=false;
console.log(tinderUser);

// nested object
const regularUser={
    email: "haribahadur@gmail.com",
    fullname:{
        userfullname:{
            firstname:"deep",
            lastname:"shrestha"
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);

// adding objects
console.log("Adding objects......");
const obj1={1:'a', 2:'b'};
const obj2={3:"c", 4:"d"};

const obj3={ obj1 , obj2}
console.log(obj3);

console.log(Object.assign({},obj1,obj2));
// obj3=...obj1, ...obj2
console.log({...obj1, ...obj2});



// array of object

const users=[
    {
        name:"deep",
        id:"dipstha1313@gmail.com"
    },
    {
        name:"deep",
        id:"dipstha1313@gmail.com"
    },
    {
        name:"deep",
        id:"dipstha1313@gmail.com"
    },
    {
        name:"deep",
        id:"dipstha1313@gmail.com"
    }
]
console.log(users[1]);
console.log(users[1].name);


//keys
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("name")); // check if tinderUser has property named name or not , if present returns true if not return false
console.log(tinderUser.hasOwnProperty("google"));