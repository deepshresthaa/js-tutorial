// for of 

// in array;
console.log("Demonstrating for of loop in array.");

const arr=[1,"deep",3,4,5]
for (const i of arr) {
    console.log(i);    
}

// in string
console.log("Demonstrating for of loop in string.");
const str="Deep Shrestha";
for (const character of str) {
    console.log(character);
}

// Maps
const map=new Map()
map.set('In',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

for (const [key,value] of map) {
    console.log(` ${key} : ${value}`);
}



const myObj={
    game1:'NFS',
    game2:'Spiderman'
}
for (const key of myObj) {
    console.log(key);
}