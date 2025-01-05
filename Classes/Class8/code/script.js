// console.log("Hey, I am Here");
// const button = document.getElementById("myButton");
// button.onclick = function () {
//   alert("You clicked me 2");
// };
// function CountRabbits() {
//   for (let i = 1; i <= 3; i++) {
//     alert(`Rabbit ${i}`);
//   }
// }

// const ButtonEvent = document.querySelector("#buttonEvent");
// // function eventListenerClick() {
// //     console.log("You Clicked Me");
// // }
// //
// ButtonEvent.addEventListener("click", function () {
//   console.log("You clicked me through the event listener");
// });

// const nameINPUT = document.getElementById("nameInput");
// nameINPUT.addEventListener("blur", function () {
//   console.log(`Hello ${nameINPUT.value}`);
// });
const redDiv = document.getElementById("redDiv");
function setColorToDiv(event) {
  console.log(event.target.style);

  event.target.style.backgroundColor = "red";
  event.target.style.width = "600px";
}
function removeColorDiv(event) {
  console.log(event.target.style);

  event.target.style.backgroundColor = "black";
  event.target.style.width = "300px";
}

redDiv.addEventListener("mouseover", setColorToDiv);
redDiv.addEventListener("mouseout", removeColorDiv);
