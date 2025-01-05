// function getJoke() {
//   fetch("https://api.chucknorris.io/jokes/random")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);

//       document.getElementById("jokeContainer").innerHTML = data.value;
//     })
//     .catch((error) => console.log(error));
// }

// document.getElementById("joke").addEventListener("click", getJoke);

async function getJoke() {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    console.log(data);
    console.log(response);
    document.getElementById("jokeContainer").innerHTML = data.value;
  } catch (error) {
    console.log(error);
  }
}

document.getElementById("joke").addEventListener("click", getJoke);
