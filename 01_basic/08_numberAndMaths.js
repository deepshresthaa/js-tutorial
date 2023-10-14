const score=200;
console.log(score);

const balance = new Number(100); // value store in balance is always a number
console.log(balance);

console.log(balance.toString().length);// first converts number stored in balance to string type and count number of character
console.log(balance.toFixed(2)); // here toFixed(2) means number of digits after decimal

const otherNumber=123.8966;
console.log(otherNumber.toPrecision(4));

const hundreds=10000000;
console.log(hundreds.toLocaleString('en-IN'));// toLocalString( ) means to show the number we've entered in american standard that is in term of millions and billions ; 10000000 -->10,000,000 
// value inside if i.e ' en-IN' means to show the number system in indian standard i.e. in terms of lakhs and crores i.e. 10000000-> 1,00,00,000

// +++++++Maths+++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(2,3,4,7));
console.log(Math.max(8,3,4));


// Math.randon()
console.log(Math.random()); // gives number between 0 to 1.
console.log(Math.floor(Math.random()*10)+1);// gives number between 1 to 10
const min=1,max=6;
console.log((Math.floor(Math.random()*(max-min+1))) + min); // gives number between min to max.