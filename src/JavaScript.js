import axios from "axios";
import Typewriter from "typewriter-effect";
function displayCulture(response) {
    new Typewriter("#culture", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

function generateCulture(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "fa506aa8bdtd3d64a554291oa74a69fb";
    let context =
        "You are a Tourist in South Africa and love to to experience different Cultures. Your mission is to generate a 4 line description in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Include a title to the Culture. Sign the Culture with 'SheCodes AI' inside a <strong> element at the end of the paragraph and NOT at the beginning";
    let prompt = `User instructions: Generate a Culture paragraph ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let cultureElement = document.querySelector("#culture");
    cultureElement.classList.remove("hidden");
    cultureElement.innerHTML = `<div class="generating">⏳ Generating a paragraph about ${instructionsInput.value}</div>`;

    axios.get(apiURL).then(displayCulture);
}

let cultureFormElement = document.querySelector("#culture-generator-form");
cultureFormElement.addEventListener("submit", generateCulture);
