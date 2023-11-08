function oop(username,isLoggedIn, loginCount){
    this.username=username;
    this.isLoggedIn=isLoggedIn; 
    this.loginCount=loginCount;
    return this;
}
const userOne=new oop("Deep",true, 9);
const userTwo=new oop("Dikshita",false,0);
// console.log(userOne);
// console.log(userOne.constructor)
// console.log(userTwo.constructor)

console.log(oop("Shweta",true,7));
console.log(userOne);