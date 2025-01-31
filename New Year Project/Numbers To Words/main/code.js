const words = [
  "Zero",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
  "Twenty",
  "Thirty",
  "Forty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety",
];

const container = document.getElementById("words");
const enterNumber = document.getElementById("numbers");
// let number = prompt("enter num");
/*prompt("Enter a Number -->:");
 */
let numToWord = [];

function translator(numbers) {
  let digit;
  let ten;
  let hundred;
  let thousand;
  if (numbers < 0) {
    let negative = numbers * -1;
    container.value = `Negative ${translator(negative)}`;
  }
  if (numbers === 1000000) {
    container.value = "One Million";
  }
  if (numbers > 1000000) {
    container.value = "This number is too big. sorry :(";
  } else if (numbers < 20) {
    container.value = words[numbers];
  } else if (numbers < 100) {
    digit = numbers % 10;

    ten = Math.floor(numbers / 10);

    return digit === 0
      ? (container.value = words[18 + ten])
      : (container.value = `${words[18 + ten]} ${words[digit]}`);
  } else if (numbers < 1000) {
    hundred = Math.floor(numbers / 100);
    let rest = numbers % 100;
    return rest === 0
      ? /*? `${words[hundred]} Hundred`
      : `${words[hundred]} Hundred and ${translator(rest)}`;*/
        (container.value = `${words[hundred]} Hundred`)
      : (container.value = `${words[hundred]} Hundred and ${translator(rest)}`);
  } else if (number <= 1000000) {
    thousand = Math.floor(number / 1000);
    const rest = number % 1000;
    rest = `${translator(thousand)} Thousand`;
    if (rest > 0) {
      rest += ` ${translator(remainder)}`;
    }
  }
}

enterNumber.addEventListener("input", () => {
  const value = parseInt(enterNumber.value);
  if (isNaN(value)) {
    alert("Please enter a valid number.");
  } else {
    translator(value);
  }
});
