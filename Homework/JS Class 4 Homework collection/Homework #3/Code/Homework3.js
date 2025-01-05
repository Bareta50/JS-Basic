/*Code To Be Added!*/
function combineStrings(Arr) {
  let resultString = "";

  for (let i = 0; i < Arr.length; i++) {
    resultString += Arr[i] + "";
  }

  resultString = resultString.trim();

  return resultString;
}

let stringArr = ["Hello", "there", "students", "of", "SEDC", "!"];
let result = combineStrings(stringArr);
console.log(result);
