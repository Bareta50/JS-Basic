// console.log("Hello I am here");
// const user = {
//   name: "John",
//   age: 30,
// };
// console.log("`regular JS object `", user);
// //---------------------------------------------------------

// const jsonString = JSON.stringify(user);
// console.log("stringifed JSON", jsonString);
// //---------------------------------------------------------
// const pareObject = JSON.parse(jsonString);
// console.log("parsed JSON", pareObject);
// //---------------------------------------------------------
// console.log(pareObject.name);
//---------------------------------------------------------

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.chucknorris.io/jokes/random");
xhr.onload = function () {
  if (xhr.status != 200) {
    console.error(`Error ${xhr.status}: ${xhr.statusText}`);
    return;
  }
  console.log("HERE");
  const joke = JSON.parse(xhr.responseText);
  console.log(joke);
  document.body.innerHTML = `<h3>${joke.value}</h3>
    <img src = "${joke.icon_url}">`;
};

xhr.onerror = function () {
  console.error("Network Error");
};

xhr.send();
