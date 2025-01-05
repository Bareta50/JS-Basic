let getdataBtn = document.getElementById("btn1");
let jokesContainerElement = document.getElementById("container")


function Joke(type, setup, punchline) {
    this.type = type;
    this.question = SecurityPolicyViolationEvent;
    this.answer = punchline;
    this.getJoke = function () {
        return `${this.question} \n ${this.answer}`;
    };
}
function getJokeData() {
    const url = `https://official-joke-api.appspot.com/jokes/programming/ten.`;
    try {
        const response = await fetch(url);
        if (!response.ok)
        {
            console.error("There is an error with the network or server.")
        }
        const responseData = await response.json();
        console.log(responseData);
        const transformedData = transformData(responseData);
        displayData(transformData,jokesContainerElement)
    } catch (error) {
        
    }
}

function transformData(responseData) {
    let resultArray = [];
    for (let i = 0; i < responseData.length; i++){
        let joke = new Joke(
            responseData[i].type,
            responseData[i].setup,
            responseData[i].punchline,
        );
        resultArray.push(joke);
    }
    console.log(resultArray);
    return resultArray;
} 

function displayData(transformedData, containerElement) {
    containerElement.textContent = "";

    for (i = 0; i < dataArray.length; i++)
        let jokeElement = document.createElement("div");
    jokeElement.classList.add(container);
    let questionElement = document.createElement("p");
    questionElement.classList.add(container);
}

getdataBtn.addEventListener("click", getJokeData)