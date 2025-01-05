/*

    Primer za koriskenje .join za array's

const fruits = ["Apple", "Bannana", "Orange"];
console.log(fruits);
console.log(`My favorite fruits are:${fruits[0]}, ${fruits[1]},${fruits[2]}`);
const jointFruits = fruits.join(" and ");
console.log(jointFruits);
console.log(`My favorite fruits are: ${jointFruits}.`);
*/
//Class 6 pocniva od tuka---->
//split()
//Use .split to break a string into an array and .join to join it back

const paragraph =
  "JavaScript is amazing. It is verisile and powerfull. Devs (NOT All of them!) love it.";
const sentences = paragraph.split(".");
console.log(sentences);
//toUpperCase() and roLowerCase()

const greetings = "Hello World!";
console.log(greetings);
console.log(greetings.toUpperCase());
console.log(greetings.toLowerCase());
//length--> find how long is a string
const lectureName = "Basic JavaScript";
console.log(lectureName.length);
//trim()
//teim white spaces arround the string
const username = "           username           ";
console.log(username);
const trimUserName = username.trim();
console.log(trimUserName);
//charAt()
//Acces a specific character in a string using its index
const phrase = "My name is Filip";
console.log(phrase.charAt(11));
console.log(phrase.charAt(12));
console.log(phrase.charAt(13));
console.log(phrase.charAt(14));
console.log(phrase.charAt(15));
/*###########################*/
