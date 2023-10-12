// Number

let score=13; // score is number type
console.log(typeof score);// display number
let toString=String(score);// converting score(number) to string type
console.log(toString); // printing value present in toString
console.log(typeof toString); // now 13 is converted into string type

// string

let x="333abc";
let xToNumber=Number(x); // converting "333abc" to number type
console.log(typeof xToNumber); // number type
console.log(xToNumber);//displays NaN

// boolean

let bool=1; // any alphabet or words except " " and 0 , gives true in boolean
let toboolean=Boolean(bool); // converting 1 to true
console.log(toboolean); // displays true


// Notes:
// "33" =>33
// "333abc" =>NaN
// true=>1; false=>0
