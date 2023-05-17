// Define global variables
const article1 = document.querySelector(".form-article");
const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container3");
const container4 = document.querySelector(".container4");


document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn1");
  btn.addEventListener("click", init);
});

async function init() {
  // grab input from form
  const charName = document.getElementById("disneyName");
  let request = charName.value;
  let url = `https://api.disneyapi.dev/character?name=${request}`;
    
  let response = await fetch(url);
  let character = await response.json();
  try {
      // grab textContent from the API
      const nameElement = document.createElement("p");
      // access the name using character.DATA.name
      // data is important here because it takes me through the data object
      // and into the "name" object property
      nameElement.textContent = `${await character.data[0].name}`;
      const filmElement = document.createElement("p");
      filmElement.textContent = `${await character.data[0].films}`;
      const shortFilmElement = document.createElement("p");
      shortFilmElement.textContent = `${await character.data[0].shortFilms}`;
      const parkElement = document.createElement("p");
      parkElement.textContent = `${await character.data[0].parkAttractions}`;
      
      // make reference to the html container where the info
      // will be displayed
      container1.innerHTML = " ";
      let name = container1.appendChild(nameElement);
      container2.innerHTML = " ";
      let film = container2.appendChild(filmElement);
      container3.innerHTML = " ";
      let shortFilms = container3.appendChild(shortFilmElement);
      container4.innerHTML = " ";
      let parkAttractions = container4.appendChild(parkElement);
  } catch {
      err => console.error("error", err.message);
  }
}
