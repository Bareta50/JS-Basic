// let input = prompt(
//   "Enter the number of minutes you want to convert to seconds!"
// );
// let minutes = 30;
// let secondsInMinutes = input * minutes;
// console.log(`${input} minutes are ${secondsInMinutes} seconds`);

// let score = prompt("Enter the score");
// if (score > 100) {
//   console.log("Invaled. The score is grater than 100!");
// } else if (score > 75) {
//   console.log("The sudent passed the exam!");
// } else {
//   console.log("The student failed the exam!");
// }

// let age = parseFloat(prompt("You're Age:"));
// console.log(age);
// let hasId = prompt("Do you hav Id? [Y/N]");
// console.log(hasId);
// if (age > 18) {
//   if (hasId == "Yes" || hasId == "yes") {
//     console.log("You can enter!");
//   } else {
//     console.log("Get lost punk!");
//   }
// } else {
//   console.log("No kids allowed!");
// }

// ########### Functions ############/

function Greetings() {
  //...some code
  console.log("Welcome Back!");
}
Greetings();

let firstName = prompt("Enter youre first name!");
let lastName = prompt("Enter youre last name!");

function greetUser(firstName, lastName) {
  if (firstName && lastName)
    console.log(`Hello, welcome back ${firstName} ${lastName}.`);
  else {
    console.log("Hello, welcome back John Doe.");
  }
}
greetUser();

// Returning Function

function greetUserReturn(Fname, Lname) {}
