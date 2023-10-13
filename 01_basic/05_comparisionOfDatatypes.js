// same datatype comparision comparision
console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);

// different datatypes comparision
console.log(null>0);
console.log(null==0);
console.log(null>=0);

// 
console.log(undefined==0); // directly compare values without checking if values are of similar type
console.log(undefined>0);
console.log(undefined<0);
// best practice for comparision

console.log("2" ===2); // first check if datatypes are similar then compare
