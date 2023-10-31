const arr=[1,2,3,4,5]
arr.forEach((items)=>console.log(items));

//another way
function printme(item) {
    console.log(item);
}
arr.forEach(printme)


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {

    console.log(item.languageName);
} )