// Dates
let myDate= new Date();// current date is assigned to myDate
console.log(myDate); // displays current date
console.log(myDate.toLocaleString());// .toLocaleString() diplays date accepted in your local area
console.log(myDate.toDateString());// .toDateString() diplays day and month in string i.e. 1->Monday , 01->january
console.log(typeof myDate);// myDate is object type

let myCreatDate=new Date(2023,0,3);// to insert date as per the user requirement
console.log(myCreatDate.toLocaleString());

// ++++Ways to add date++++
myCreatDate=new Date(2020,0,23,5,3);
console.log(myCreatDate.toLocaleString());

myCreatDate=new Date("2021-01-14");
console.log(myCreatDate.toLocaleString());
console.log(myCreatDate.toDateString());

let myTimeStamp=Date.now();
console.log(myTimeStamp);

console.log(myCreatDate.getDate());
console.log(myCreatDate.getDay());
console.log(myCreatDate.getFullYear());
console.log(myCreatDate.getMonth());


console.log(Math.floor(Date.now()/1000));// converts date in ms to seconds

myCreatDate.toLocaleString('default',{
    weekday:"long",
})
console.log(myCreatDate.toLocaleString());
console.log(myCreatDate.toDateString());