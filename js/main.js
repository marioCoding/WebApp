// Define global variables
const article1 = document.querySelector(".form-article");
const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container3");


document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn1");
  btn.addEventListener("click", init);
});

async function init() {
  // grab input from form
  const charName = document.getElementById("disneyName");
  let request = charName.value;
  let url = `https://api.disneyapi.dev/character?name=${request}`;
    
  let disneyChar = await fetch(url)
  let character = await disneyChar.json();
  try {
      const nameElement = document.createElement("h3");
      // access the name using character.DATA.name
      // data is important here because it takes you throught the data object
      // and into the "name" object property
      nameElement.textContent = `${await character.data[1].allies}`;
      
      
      // make reference to the html container where the info
      // will be displayed
      container1.innerHTML = " ";
      container1.appendChild(nameElement);
  } catch {
      err => console.error("error", err.message);
  }
}
