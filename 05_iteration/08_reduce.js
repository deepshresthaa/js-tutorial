const myNums=[4,5,6]
const myTotal = myNums.reduce(function (acc, currval) {
        console.log(`acc: ${acc} and currval: ${currval}`);
        return acc + currval
    }, 0)
    console.log(myTotal);

const arr=[1,2,3,4];
let total=arr.reduce((accumulate, current_value)=> accumulate+ current_value, 4);
console.log(total);


//adding cart price website
const carts=[
    {
        course:"javascript",
        price:1999
    },
    {
        course: "python",
        price:2999
    },
    {
        course: "android development",
        price:999
    },
    {
        course: "data science",
        price:5999
    },
]
let mytotalprice=carts.reduce((vat,item_price)=> vat+item_price.price,0)
console.log(`Your purchasing price is ${mytotalprice}`);