//X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-
//X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-
//X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-
//--------------------------------------------------------------------------
// Comments written by Filip for seperating the functions of the code, and to better understand it.
// !!! NOT AI !!!
//--------------------------------------------------------------------------
const btnsValue = [ 
  "AC", "+/-", "%", "÷",
  "7", "8", "9", "×",
  "4", "5", "6", "-",
  "1", "2", "3", "+",
  "0",".","="
]

const operatorsSymbols = ["÷", "×", "-", "+", "="];
const modifiers = ["AC", "+/-", "%"];

document.getElementById("display")

let firstNumber = 0;
let secondNumber = null;
let operator = null;

function AllClear() {
  firstNumber = 0;
  secondNumber = null;
  operator = null;
}
for (let i = 0; i < btnsValue.length; i++)
{
  let value = btnsValue[i];
  let btn = document.createElement("button");
  btn.innerHTML = value;

    //CSS For Buttons
    if (value == '0') {
      btn.style.width = "180px";
      btn.style.gridColumn = "span 2";
    }
    if (operatorsSymbols.includes(value))
    {
      btn.style.backgroundColor = "#FF9500"
    }
    else if (modifiers.includes(value))
    {
      btn.style.backgroundColor = "#D4D4D2";
      btn.style.color = "#1c1c1c";
    }

    // This will proces the buttons clicked
       btn.addEventListener("click", function () {
      
        // This if will chek if one of the operator symbols was presed

      if (operatorsSymbols.includes(value)) {
        if (value == "="){
          if (firstNumber != null)
          {
            secondNumber = display.value;
            let numOne = Number(firstNumber);
            let numTwo = Number(secondNumber);

            if (operator == "÷") {
              display.value = numOne / numTwo;
            }
            else if (operator == "×") {
              display.value = numOne * numTwo;
            }
            else if (operator == "-") {
              display.value = numOne - numTwo;
            }
            else if (operator == "+"){
              display.value = numOne + numTwo;
            }
          }
        }
        else{
          operator = value;
          firstNumber = display.value;
          display.value = "";
          }
      }
      // This else if will chek if one of the modefying  symbols was presed
      else if (modifiers.includes(value)) {
        
        if (value == "AC") {
          AllClear();
          display.value = "";
        }
        else if (value == "+/-") {
          if (display.value != "" && display.value != "0")
          {

            if (display.value[0] == "-")
            {
              display.value = display.value.slice(1);
            }

            else
            {
              display.value = "-" + display.value;
            }
          }
        }
        else if (value == "%")
        {
          display.value = Number(display.value) / 100;
         }
      }
      else
      {
        // This else will process the numbers [0-9] and the dot ' .'
        if (value == ".")
        {
          if (display.value != "" && !display.value.includes(value))
          {
            display.value += value;
          }
        }
        else if (display.value == "0") {
          display.value=value
        }
        else {
          display.value += value;
        }
      }
    });

    // Adding Buttons to the html doc
    document.getElementById("buttons").appendChild(btn);
}