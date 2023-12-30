//======A closer look at function===//
const book=[];
const createBooking=function(flightNum,passenger=1,price=199*passenger){
    const booking={
        flightNum,
        passenger,
        price,
    }
    book.push(booking);
}
createBooking("234A");//here, we make dynamic ticket counter
createBooking("234A",3);
createBooking("234A",5,2000);
createBooking("234A",undefined, 3999);
console.log(book);


//How passing Arguments works?

const flight="322A";
const deep={
    name:"Deep Shrestha",
    passport:43432313367,
};
const checkIn=function(flightNum,passenger){
    flightNum="333B";
    passenger.name="Mr."+ passenger.name;
    if(passenger.passport===43432313367){
        console.log("Welcome to the flight sir!");
    }
    else{
        console.log("Wrong Passport");
    }
    console.log(flight,deep);//flightNum doesnot change but name is changed because flightNum is primitive value and name is referenced value which passes its address whereas primitive value passes its value(in other other its copied value is passed to the new variable)
}
checkIn(flight,deep);

const newPassport=function(person){
    const pass=Math.trunc(Math.random()*1999999999);
    if(pass===person.passport){
        console.log("Welcome to the flight sir!")
    }
    else{
        console.log("Wrong passport detected");
    }
}
newPassport(deep);