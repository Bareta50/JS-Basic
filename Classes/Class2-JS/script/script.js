console.log("Hell from script.js");

let x = "Hello World";

x = 55;
console.log(x);

//strings

console.log("Hello" + " " + "G3");

let helloGreeting = "Hello";
let qa = "from Qinshift Academy";

let greering = helloGreeting + " " + qa;

console.log(greering);

//Numbers with string

let firstNuber = 10;
let secondText = "example";

let mixedResult = firstNuber + secondText;
console.log(typeof mixedResult);
console.log(mixedResult);

let numberOne = 10;
let numberTwo = "12";
let numResult = numberOne + numberTwo;

console.log(typeof numResult);
console.log(numResult);

let academyName = "QinshiftAcademy";
let groupNum = "G3";
let fullSentance = `I'm a student in ${academyName}, class ${groupNum}.`;
console.log(fullSentance);

let greetMessage = `Hello I'm Filip`;

let firstName = null;
let lastName = "Velichkovshi";
console.log(firstName + lastName);

console.log(
  "==============================================================================================="
);
//Special Numbers

let numOperationsOne = 1 / "test";
console.log(numOperationsOne);
console.log(typeof numOperationsOne);

console.log(numOperationsOne == NaN);
let regularWord = "Working with numbers in JS lol";
console.log(isNaN(numOperationsOne));
console.log(isNaN(regularWord));
console.log(Number.isNaN(regularWord));
console.log(Number.MAX_SAFE_INTEGER);
let infinity = "Infinity";
console.log(infinity);

let MSN = Number.MAX_SAFE_INTEGER;

console.log(infinity > MSN);

//Logic operators

let comparatorOne = 50;
let comparatorTwo = 80;

console.log(comparatorOne === comparatorTwo);
console.log(comparatorTwo > comparatorOne);

let num1 = 5;
let num2 = 10;
let num3 = 15;
let num4 = 15;

let experssionRes = num1 + num2 >= num3 + num4;
console.log(experssionRes);

console.log(
  "======================================================================"
);

// AND

console.log("AND");
console.log(true && true); // true
console.log(true && false); //false
console.log(false && false); // false

// OR

console.log("OR");
console.log(true && true); // true
console.log(true && false); //true
console.log(false && false); //false

// (NOT)

console.log("NOT");
console.log(!true); // false
console.log(!false); // true
console.log(!""); // true
console.log(![]); //false
console.log(!{}); //false
console.log(!!{}); //false
console.log(Boolean({})); //Explination will come in the future. too fresh for this.

console.log("Comparison");
let comparisonIDK1 = 4 < 7;
let comparisonIDK2 = 5 !== 8; // works the same way as (===)
console.log(comparisonIDK1);
console.log(comparisonIDK2);

let comp1 = 5;
let comp2 = 9;
let comp3 = comp1 > comp2;

console.log(comp1);
console.log(comp2);
console.log(comp3);

let compFinal = comp1 && comp2 && comp3;
console.log(compFinal);

let compFinal2 = comp1 || comp2 || comp3;
console.log(compFinal2);
