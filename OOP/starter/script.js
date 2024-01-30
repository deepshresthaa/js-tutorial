'use strict'
//constructor function
const Person=function(firstName, birthYear)
{
    this.firstName=firstName
    this.birthYear=birthYear;
}
const deep=new Person("Deep",2004);
const dikshita=new Person("Dikshita",2017);
console.log(deep)
console.log(dikshita)

//prototype
//adding method to prototype
Person.prototype.calcAge=function(){
    console.log(2024-this.birthYear);
}
deep.calcAge();
//adding method
Person.prototype.species="Homo Sapiens";
console.log(Person.prototype);
console.log(Person.prototype===deep.__proto__);

console.log(Person.prototype.isPrototypeOf(deep));

//check if property is its own or not
console.log(deep.hasOwnProperty("firstName"));
console.log(deep.hasOwnProperty("species"));

//prototypal inheritance and prototypal chaining
//Person.prototype is not prototype of Person but of all the objects created using Person constructor
//prototypal chaining is same as scope chaining but with .__proto__

//prototypal inheritance on built-in objects
const arr=[2,3,4,4,3];
Array.prototype.unique=function(){
    console.log([...new Set(this)]);
}
arr.unique();
console.log(arr)
console.log(arr.__proto__)//methods and properties that arr can inherit and in Array.prototype
console.log(arr.__proto__.__proto__)// constructor.object()
console.log(arr.__proto__.__proto__.__proto__)// no further chaining after Constructor.object so gives null