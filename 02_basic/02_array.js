let marvelHeros=["thor","ironman","spiderman"];
const dcHeros=["superman","flash","batman"];
marvelHeros.push(dcHeros); // .push joins the arrays but joined array will be stored as a element
console.log(marvelHeros);

marvelHeros=["thor","ironman","spiderman"];

const combinedHeros=marvelHeros.concat(dcHeros); // .concat joins the arrays and elements of joined array takes individual element
console.log(combinedHeros);

const myFamily=["Deep","sita","sandip"];
const myJointFamily=["Dibash","Dikshita","Babita","Anjali"];
console.log(...myFamily, ...myJointFamily);// '...' is a spread operator , it spreads all the elements in an array

const newArray=[1,2,[3,4,5],[2,3,[8,9],1]];
console.log(newArray.flat(Infinity)); // .flat converts all 2D, 3D array to linear form 

console.log(Array.isArray("Deep")); // .isArray checks if the given type is array or not
console.log(Array.from("Deep")); // converts the given data to an array
console.log(Array.from({name: "deep"})); //interesting

let score1=100;
let score2= 200;
let score3=300;
console.log(Array.of(score1,score2,score3));  // .of makes array of different elements 