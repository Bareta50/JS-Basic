// let number = 123;
// let string = "Hello World";
// let TrueFalse = false;
// let FalseTrue = "";

// console.log(
//   `${typeof string},${typeof TrueFalse},${typeof FalseTrue},${typeof number},`
// );

// function numberDiff(inputNum) {
//   let differecne = inputNum - 13;
//   let numConf = parseInt(enterANum);

//   if (numConf > 13) {
//     console.log(differecne * 2);
//   } else {
//   }
// }

// numberDiff();
/*
function closerToHundred(inputOne, inputTwo) {
  let containerOne = 0;
  let containerTwo = 0;
  if (inputOne < 0 || inputTwo < 0) {
    alert("Numbers not valid");
    return closerToHundred;
  } else {
    if (inputOne > 100 && inputTwo > 100) {
      if (inputOne < inputTwo) {
        alert(`${inputOne} is closer to 100`);
      } else if (inputTwo < inputOne) {
        alert(`${inputTwo} is closer to 100`);
      }
    } else if (inputOne < 100 && inputTwo < 100) {
      if (inputOne > inputTwo) {
        alert(`${inputOne} is closer to 100`);
      } else if (inputTwo > inputOne) {
        alert(`${inputTwo} is closer to 100`);
      }
    }

    //=============================================
    else if (inputOne > 100 && inputTwo < 100) {
      containerOne = 100 - inputOne;
      containerTwo = inputTwo - 100;
      if (inputOne > inputTwo) {
        alert(`${inputOne} is closer to 100`);
      } else if (inputTwo > inputOne) {
        alert(`${inputTwo} is closer to 100`);
      }
    } else if (inputOne < 100 && inputTwo > 100) {
      containerOne = inputOne - 100;
      containerTwo = 100 - inputTwo;
      if (inputOne < inputTwo) {
        alert(`${inputOne} is closer to 100`);
      } else if (inputTwo < inputOne) {
        alert(`${inputTwo} is closer to 100`);
      }
    }
  }
}

closerToHundred(220, 20); /*
if (inputOne === inputTwo) {
    alert(`Both ${inputOne} and ${inputTwo} are equaly close`)
}*/
/*

//Finished +++++
console.log("Exersise 5");
console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")

function salaryCalk() {
  let salary = 1000;
  let rent = 350;
  let bills = 250;

  let moneyLeft = salary - (rent + bills);
  let totalExpences = rent + bills;

  console.log(`Expences: ${totalExpences}; Money left: ${moneyLeft}`);
}
salaryCalk();
*/
/*

console.log("Exersise 6");
console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
function ExersiseSix() {
  const student = {
    name: "Bob Bobsky",
    math: 10,
    english: 6,
    science: 8,
    sport: 9,
    chemestry: 6,
  };
  let avarageGrade =
    (student.math +
      student.english +
      student.science +
      student.sport +
      student.chemestry) /
    5;

  console.log(`${avarageGrade}`);
  if (avarageGrade > 8) {
    alert(`Student ${student.name} has PASSED`);
  } else if (avarageGrade < 8) {
    alert(`Student ${student.name} has FAILED`);
  }
}
ExersiseSix();
*/
/*
function FizzBuzz(num) {
  if (num % 3 === 0 && num % 7 === 0) {
    console.log("FizzBuzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 7 === 0) {
    console.log("Buzz");
  }
}

FizzBuzz(21);
*/
function joinArray() {
  testArray = ["Hello", "this", "array", "is", "going", "to", "be", "joined."];
  arrayJoin = testArray.join("_");
  console.log(arrayJoin);
}

joinArray();
