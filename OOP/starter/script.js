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
