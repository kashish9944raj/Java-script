//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

/*const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
*/

//stack and heap

//but 


//let myYoutubename = "kashishrajdotcom"
//let anothername = myYoutubename
//anothername = "chaiaurcode"
//console.log(myYoutubename);
//console.log(anothername);



let userOne = {
    email: "kashish@google.com",
    upi: "user@ybl"
};

let userTwo = userOne; // same object reference
userTwo.email = "bro@google.com"; // modifies userOne.email too

console.log(userOne.email); // bro@google.com
console.log(userTwo.email); // bro@google.com


    

