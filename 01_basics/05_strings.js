const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");
//its not preferrable mostly and the one which is just below is most used.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))
//it helps in replacing anythinh from the url because it happens here that when we include a space in some url it get converted in %20

console.log(url.includes('sundar'))

console.log(gameName.split('-'));