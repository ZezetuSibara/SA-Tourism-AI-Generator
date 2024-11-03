function generateCulture(event) {
    event.preventDefault();

    new Typewriter("#Culture", {
        strings: "Many Cultures, One Future",
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

let CultureFormElement = document.querySelector("#culture-generator-form");
CultureFormElement.addEventListener("submit", generateCulture);
