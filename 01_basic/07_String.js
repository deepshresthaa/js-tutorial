const name="Deep";
const repoCount=4;
console.log(`My  name is ${name} and my repo count is ${repoCount}`); // this way is best dont try to use + operator to concatinate name and repoCount
const gameName=new String("Freefire");
console.log(gameName[2]); //gives character present at 2th index
console.log(gameName.length); // gives length of freefire
console.log(gameName.toUpperCase()); // convert freefire to uppercase

console.log(gameName.charAt(3));// displays character present at 3 index
console.log(gameName.indexOf('r')); // displays in what index 'r' is present in freefire
 
const newString=gameName.substring(0,4); // new string will be formed with the string at gameName with character between 0 to  4(exclusively)
console.log(newString); 

const anotherString=gameName.slice(0,4);
console.log(anotherString); 

const deep="       deep    ";
console.log(deep);
console.log(deep.trim()); // remove white spaces

const url="https://deep.com/deep%20shrestha";
console.log(url.replace('%20','-')); // replace every %20 in url with -;
console.log(url.includes("deep")); // check if deep is present in url or not

let productName="deep-is-an-engineer.";
console.log(productName.split('-')); // when console reads '-' then string will be splitted