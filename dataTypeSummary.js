// There are two type of data type:: Primitive datatype and reference(non-primitive)
/*******Primitive**** */

// 7 types: String, Number, Boolean, Null, undefined, Symbol, BigInt
const score=100; // number
const scoreValue=100.3;// number
const isLoggedIn=false;// boolean datatype
const outsideTemp=null; // object datatype
let userEmail; // when value is not given is a variable it sets its datatype as undefined.
const bigNumber=43534546656n; //for huge number , BigInt datatype
const id=Symbol('123');
const anotherId=Symbol(123);
console.log(id==anotherId); // here symbol make each Id unique so both are reffered different
 
console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof bigNumber);
console.log(typeof id);
// ****Reference***
// Array, Objects, Functions
const heros=["Shaktiman","naagraj","doga"];

let myobj={
    name:"Deep",
    age:20,
}

const myFunction=function(){
    console.log("Hello World!");
}
console.table([heros,myobj,myFunction]);
console.log(typeof heros);
console.log(typeof myobj);
console.log(typeof myFunction);
