//Write a JavaScript program that will calculate the price of 30 Phones, where the price of one phone is $119.95 and the tax rate is 5%.

let phoneCost = 119.95;
let taxRate = 0.05;
let numPhones = 30;

let priceWithoutTax = phoneCost * numPhones;
let fullTax = priceWithoutTax * taxRate;
let taxedPrice = priceWithoutTax + fullTax;

console.log(`Price of one phone: ${phoneCost}`);
console.log(`Tax rate: ${taxRate * 100}%`);
console.log(`Number of phones ${numPhones}`);
console.log(`The total price without tax is: ${priceWithoutTax.toFixed(2)}`);
console.log(`The total tax is: ${fullTax.toFixed(2)}`);
console.log(`Full taxed price: ${taxedPrice.toFixed(2)}`);


