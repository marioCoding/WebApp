document.addEventListener("DOMContentLoaded", init)

async function init() {
    let disneyChar = await fetch("https://api.disneyapi.dev/character?name=Mickey%20Mouse")
    let character = await disneyChar.json();
    try {
        const nameElement = document.createElement("h3");
        // access the name using character.DATA.name
        // data is important here because it takes you throught the data object
        // and into the "name" object property
        nameElement.textContent = `${await character.data[1].videoGames}`;
        // make reference to the html container where the info
        // will be displayed
        const container = document.querySelector("#container")
        container.innerHTML = " ";
        container.appendChild(nameElement);
    } catch {
        err => console.error("error", err.message);
    }

}
