// Declaring and creating an array
let products = ["Laptop", "Phone", "Shoes", "Watch", "Table", "..."];
console.log(products);
console.log(`The type of the array is ${typeof products}`);
//An emty array is always truthy
let emptyArray = [];
console.log(!!emptyArray); //true

//Array that contains elements of different types
let mixedValueArray = [1, "Hellow World", false, "", 7.8, "Bob", undefined];
console.log(`Array that contauins different elements: ${mixedValueArray}`);
//Accesing elements of the array - via the index
//Each array alement has its own index and they start from 0 and increment onword
console.log(products[3]);
console.log(products[5]);
console.log(products[2]);
//Changing the value of a specific element in an array
products[3] = "Backpack";
console.log(products);

//Getting the leinght of an array.

let leinghtOfproducts = products.length;
console.log(`The leinght of the array is --> [${leinghtOfproducts}]`);
let lastItem = products[products.length - 1];
console.log(lastItem);
//Adding elements to an array
products[products.length] = "Headphones";
console.log(products);
// .push adds elements from the end
products.push("Jacket", "Keyboard", "Printer");
console.log(products);
// . unshift adds elements from the front
products.unshift("Gears Of War 2");
console.log(products);
//Removing elements from array
//Removing last element from the array
//
let lastProduct = products.pop();
console.log(products);
//Removing the firt element of an array using .shift
let frisProduct = products.shift();
console.log(products);
