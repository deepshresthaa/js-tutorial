// ways of initializing an array
const myArr1=[1,2,3,4,5];
const  myCars=["BMW","Audi","Rolls royce"];
const myArr2= new Array(2,3,6,1);

console.log(myArr1); // [1,2,3,4,5]
console.log(myArr1[3]);// 4
console.log(myArr2);// [2,3,6,1]
console.log(myCars[2]); // Rolls royce


// Array  Methods

myArr1.push(6); // .push() insert a new number at last index of an array
console.log(myArr1);

myArr1.pop();
console.log(myArr1); // .pop() eliminates element of last index of an array

myArr1.unshift(9);
console.log(myArr1); // .unshift() insert a new element at begining of an array

myArr1.shift();
console.log(myArr1); // eliminates an element from begining index of an array

console.log(myArr1.includes(4)); // .includes checks if the element is present in given array or not and returns answer in boolean.
console.log(myArr1.includes(9));

console.log(myArr1.indexOf(5)); // .indexOf(.. ) gives index of given given element if present in an array.
console.log(myArr1.indexOf(9));// if the given number is not present in an array then it returns -1 as output.


const newArr=myArr1.join(9); // .join()  joins the array and implicitly convert new array into string type
console.log(myArr1);
console.log(newArr);
console.log(typeof newArr);

// slice and splice
console.log("A",myArr1);
const myn1=myArr1.slice(1,3); //slice eliminates elements in an array of given range exclusively
console.log("Sliced elements:",myn1);
console.log("After slice:",myArr1);
console.log("B", myArr1);
const myn2=myArr1.splice(1,3);//splice eliminates elements in an array of given range inclusively
console.log("Spliced elements:", myn2);
console.log("After splice:",myArr1);


//Note:
/*main difference between slice and splice:
slice doesn't change the original array but splice changes the original array after splicing*/

