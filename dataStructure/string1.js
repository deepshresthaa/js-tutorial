//======================Working with string==========//

const airline = 'Buddha airlines nepal';

console.log('Deep'[0]);
console.log(airline[0]);
//accessing first word without out knowing its size
console.log(airline.slice(0, airline.indexOf(' ')));

//accessing last word and use of lastIndexOf();
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

//now create a function which check if the seat is middle seat or not
const checkMiddleSeat = function (seat) {
  if (seat.includes('B') || seat.includes('E')) {
    console.log('You got middle seat');
  } else {
    console.log('You got window seat');
  }
};
const checkMiddleSeaat = function (seat) {
  const a = seat.slice(-1);
  // console.log(a);
  if (a === 'B' || a === 'E') {
    console.log('you got middle seat');
  } else {
    console.log('You got window seat');
  }
};
// Seat with B and E are middle seat
checkMiddleSeat('34B');
checkMiddleSeat('32A');
checkMiddleSeat('55E');
checkMiddleSeaat('34B');
checkMiddleSeaat('32A');
checkMiddleSeaat('55E');

console.log(new String('deep')); //here string is stored as object

//methods in string
console.log(airline.toLocaleLowerCase());
console.log(airline.toUpperCase());

//use case --> fix capitalization in name
const passenger="dEeP";
const passengerLower=passenger.toLowerCase();
const passengerCorrect=passenger[0].toUpperCase()+passengerLower.slice(1);
console.log(passengerCorrect);//Deep is output


//comparing email
const email="hello@gmail.com";
const loginEmail=" Hello@gmail.COM";
const lowerEmail=loginEmail.toLowerCase();
const trimmed=lowerEmail.trim();
if(email===trimmed){
  console.log("You entered valid email address!");
}
const normalizedEmail=loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
 
console.log(normalizedEmail===email);

//replacing string
const priceGB="288,97£ ";

const priceUS=priceGB.replace("£ ","$").replace(",",".");
console.log(`${priceGB}==>${priceUS}`);

//checking is passenger are allowed to travel by plane or not in security check up

const announcement="All passengers come to boarding door 23, Boarding door 23!";
console.log(announcement.replace("door","gate"));// here "door which " occurs first only will change.

//solution for this
console.log(announcement.replace(/door/g, "gate")); // here ,"g " denotes global



//Booleans methods in string
const plane="Airbus A320neo";
console.log(plane.includes("Air"));
console.log(plane.includes("A320"));
console.log(plane.includes('boing'))
console.log(plane.startsWith("Airb"));

if(plane.startsWith("Air") && plane.endsWith("neo")){
  console.log("Part of the New airbus family");
}

//practice
const checkBaggage=function(items){
  const baggage=items.toLowerCase();
  if(baggage.includes("gun") || baggage.includes("knife")){
    console.log("You cannot take this flight");
  }
  else{
    console.log("Welcome to Buddha Airlines✈")
  }
};
checkBaggage("I have a laptop, some food and a pocket Knife");
checkBaggage('Socks and camera');
checkBaggage('Got somesnacks and a gun for protection');