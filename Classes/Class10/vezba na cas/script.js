// SW API  https://swapi.py4e.com/api/
const URL = "https://swapi.py4e.com/api/";
async function lukeSW(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    document.body.innerHTML = `<h2>${data.name}</h2>`;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

document.addEventListener("DOMContentLoad", async () => {
  await lukeSW();
});
