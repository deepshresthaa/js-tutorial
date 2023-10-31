const arr=[1,2,3,4,5,6,7,8,9,10];
const res=arr.map((num)=>num*3)
console.log(res);

const arr1=[1,2,3,4,5,6,7,8,9,10];
const result=arr1.map( ( num) => num*2).map((num)=>num+1) .filter((num)=>num>10)// map,filter can be used multiple times in single function
console.log(result);