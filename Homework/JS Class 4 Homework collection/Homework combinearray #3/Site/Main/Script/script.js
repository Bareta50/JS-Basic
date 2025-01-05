function combineStrings(Arr) {
  let resultString = "";
  let stringSpace = " ";

  for (let i = 0; i < Arr.length; i++) {
    resultString += Arr[i] + "" + stringSpace;
  }

  return resultString;
}

let stringArr = ["Hello", "there", "students", "of", "SEDC", "!"];
let result = combineStrings(stringArr);
console.log(result);
