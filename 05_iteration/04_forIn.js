//for in loopin object
const myObj={
    js:'javascript',
    cpp:"c++",
    rb:"ruby"
};
for (const key in myObj) {
    console.log(`${key} :: ${myObj[key]}`);
}

const programming=["js",'python',"cpp","c"];
for (const key in programming) {
    console.log(` ${key} => ${programming[key]}`); // key in array is its index and key in object is its key name.z
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}