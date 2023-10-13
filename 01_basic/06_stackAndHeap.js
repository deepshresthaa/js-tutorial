//comparision

// concept of stack is used for all primitive datatypes and concept of heap is used for all non-primitive datatypes.


let myYoutubename="Deep Shrestha";
let anothername=myYoutubename;
anothername="evergreengamer";// myYoutubename is string datatype so, it store data in stack, so its copied value is assigned to anothername so any changes made on anothername won't affect the initital value of myYoutubename.
console.log(myYoutubename);
console.log(anothername);

// heap
let userOne={
    email: "dipstha1313@gmail.com",
    upi:"deep.com"
}
let userTwo=userOne;
userTwo.email="dip@google.com"; // here object is non-primitive datatype so it stores data in heap so its original value is assigned to userTwo.email, hence any changes made in the value will affect the initial value.so in both case dip@gmail.com will be printed
console.log(userOne.email);
console.log(userTwo.email);