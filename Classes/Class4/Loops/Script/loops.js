// let products = ["Laptop", "Phone", "Shoes", "Watch", "Table", "Chair"];

// // Looping through products array - while
// let i = 0;
// while (i < products.length) {
//   console.log(products[i]);
//   i++;
// }

// // let tenValues = [5, 7, 2, 8, 124, 45, 87, 1, 432, 9];
// // let i = 0;
// // let maxVal = 0;
// // while (i < tenValues.length) {
// //   if (tenValues[i] > maxVal) {
// //     maxVal = tenValues[i];
// //   }
// //   i++;
// // }
// // console.log(maxVal);

// // while (true) {
// //   console.log("This will run forever!");
// // }

// // FOR Loops

// // for (let i = 0; i < products.length; i++) {
// //   console.log(`From for loop: ${products[i]}`);
// // }

// for (i = products.length - 1; i >= 0; i--) {
//   console.log(`From for loop: ${products[i]}`);
// }
// //---------------------------------------------

// //for-of loop

// for (let ellement of products) {
//   console.log(ellement);
// }

// //Break and continue

// let numms = [1, 84, 5, 7, 6, 9, 1, 2, 3, 9, 7, 5, 2, 81, 97, 65, 2, 89];

// // for (let p = 0; p < numms.length; p++) {
// //   if (numms[p] % 2 === 0) {
// //     console.log(`First even num is ${numms[p]}`);
// //     break;
// //   }
// // }

// for (let p = 0; p < numms.length; p++) {
//   if (numms[p] % 2 !== 0) {
//     continue;
//   }
//   console.log(`Even Num ${numms[p]}`);
// }

function sumOfSquares(start, end)
{
  let sumOfPow = 0;

  for (let i = start; i < end; i++)
  {

    let powOfNum = Math.pow(i, 2);

    sumOfPow += powOfNum;

  }

  return sumOfPow;
  
}

let sum = sumOfSquares(101, 150);
console.log(sum);
