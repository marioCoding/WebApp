// Define global variables
const article1 = document.querySelector(".form-article");
const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container3");
const container4 = document.querySelector(".container4");


document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn1");
  btn.addEventListener("click", getData);
});

async function getData() {
  // grab input from form
  const charName = document.getElementById("disneyName");
  let request = charName.value;
  let url = `https://api.disneyapi.dev/character?name=${request}`;
    
  let response = await fetch(url);
  let character = await response.json();
  try {
      // grab data from the API

      // Container 1
      const nameHeader = document.createElement("h3");
      const nameElement = document.createElement("p");
        // access the name using character.DATA.name
        // data is important here because it takes me through the data object
        // and into the "name" object property
      let nameData = await character.data[1].name;
      nameElement.textContent = nameData;
        // Style container 1
          nameHeader.innerHTML = "Name: "
          nameHeader.style.fontSize = "200%";
          nameHeader.style.margin = "5%";
          nameElement.style.fontSize = "150%";
  
      
      // Container 2
      const filmHeader = document.createElement("h3");
      const filmElement = document.createElement("p");
      let filmData = await character.data[1].films;
      let filmString = filmData.join(" || ");
      
      if (filmData.length === 0)
        filmElement.textContent = `${nameData} has not appeared in any Disney films.`;
      else
        filmElement.textContent = filmString;
        // Style container 2
          filmHeader.innerHTML = "Films: ";
          filmHeader.style.fontSize = "200%";
          filmHeader.style.margin = "5%";
          filmElement.style.fontSize = "150%";
          filmElement.style.fontStyle = "italic";

      // Container 3 
      const shortFilmHeader = document.createElement("h3");
      const shortFilmElement = document.createElement("p");
      let shortFilmData = await character.data[0].shortFilms;
      let shortFilmString = shortFilmData.join(" || ");
      console.log(shortFilmData);
      console.log(shortFilmElement);
   
      if (shortFilmData.length === 0)
        shortFilmElement.textContent = `${nameData} has not appeared in any Disney short films.`;
      else
        shortFilmElement.textContent = shortFilmString;
 
       
        // Style container 3
          shortFilmElement.textContent = shortFilmString;
          shortFilmElement.style.fontSize = "150%";
          shortFilmElement.style.fontStyle = "italic";
          shortFilmHeader.innerHTML = "Short Films: ";
          shortFilmHeader.style.fontSize = "200%";
          shortFilmHeader.style.margin = "5%";

      // Container 4
      const parkHeader = document.createElement("h3");
      const parkElement = document.createElement("p");
      let parkAttractionsCheck0 = await character.data[0].parkAttractions;
      let parkAttractionsCheck1 = await character.data[1].parkAttractions;
      let noAttractions = `${nameElement} does not appear in any Disney attractions`;
      let parkAttractionsData;
      let parkAttractionsString;
      if (parkAttractionsCheck0.length > parkAttractionsCheck1.length) {
          parkAttractionsData = parkAttractionsCheck0;
      } else if (parkAttractionsCheck1.length > parkAttractionsCheck0.length) {
          parkAttractionsData = parkAttractionsCheck1;
      } else if (parkAttractionsCheck0.length === 0) {
          parkElement.textContent = noAttractions;
      } else if (parkAttractionsCheck1.length === 0) {
          parkElement.textContent = noAttractions;
      }

      if (parkAttractionsData.length === 0) {
          parkAttractionsString = noAttractions;
      } else {
          parkAttractionsString = parkAttractionsData.join(" || ")
      
          console.log(`000 ${parkAttractionsCheck0}`);
          console.log(`001 ${parkAttractionsCheck1}`);
          console.log(`Data ${parkAttractionsData}`);
          console.log(`String ${parkAttractionsString}`);
  
       
        // Style container 4
          parkElement.textContent = parkAttractionsString;
          parkElement.style.fontSize = "150%";
          parkElement.style.fontStyle = "italic";
          parkHeader.innerHTML = "Park Attractions: ";
          parkHeader.style.fontSize = "200%";
          parkHeader.style.margin = "5%";
          
      }
      
      // make reference to the html containers where the info
      // will be displayed
      container1.innerHTML = " ";
      container1.appendChild(nameHeader);
      container1.appendChild(nameElement);
      container2.innerHTML = " ";
      container2.appendChild(filmHeader);
      container2.appendChild(filmElement);
      container3.innerHTML = " ";
      container3.appendChild(shortFilmHeader);
      container3.appendChild(shortFilmElement);
      container4.innerHTML = " ";
      container4.appendChild(parkHeader);
      container4.appendChild(parkElement);

  } catch {
      err => console.error("error", err.message);
  }

}

/* 
{"info":{"count":2,"totalPages":1,"previousPage":null,"nextPage":null},"data":[{"_id":3942,"films":[],"shortFilms":[],"tvShows":["Mickey Mouse Works"],"videoGames":[],"parkAttractions":[],"allies":[],"enemies":[],"sourceUrl":"https://disney.fandom.com/wiki/Lion_(Mickey_Mouse_Works)","name":"Lion (Mickey Mouse Works)","imageUrl":"https://static.wikia.nocookie.net/disney/images/b/bf/Char_79257.jpg","createdAt":"2021-04-12T02:22:52.650Z","updatedAt":"2021-12-20T20:39:57.135Z","url":"https://api.disneyapi.dev/characters/3942","__v":0},{"_id":4703,"films":["Hollywood Party","Fantasia","Fun and Fancy Free","TRON","Who Framed Roger Rabbit","Oliver & Company","The Little Mermaid","Toy Story","A Goofy Movie","Mickey's Once Upon a Christmas","Fantasia 2000","Mickey's Magical Christmas: Snowed in at the House of Mouse","Mickey's House of Villains","Teacher's Pet (film)","The Lion King 1½","101 Dalmatians II: Patch's London Adventure","Mickey, Donald, Goofy: The Three Musketeers","Mickey's Twice Upon a Christmas","Chicken Little (film)","Meet the Robinsons","Wreck-It Ralph (film)","Saving Mr. Banks","Frozen","Zootopia","Ralph Breaks the Internet"],"shortFilms":[],"tvShows":["Walt Disney anthology series","The Mickey Mouse Club","The Mouse Factory","Adventures of the Gummi Bears","Bonkers","101 Dalmatians: The Series","Mickey Mouse Works","House of Mouse","Mickey Mouse Clubhouse","Imagination Movers","Mickey's Letter Time","Have a Laugh!","Mickey’s Mousekersize","A Poem Is...","Mickey Mouse (TV series)","Minnie's Bow-Toons","Once Upon a Time","Frozen: Northern Lights","At Home With Olaf","Mickey Mouse Mixed-Up Adventures","DuckTales (2017 series)","Mickey Go Local","The Wonderful World of Mickey Mouse","WandaVision","Mickey Mouse Funhouse"],"videoGames":["Mickey Mouse: The Computer Game","Mickey Mousecapade","Adventures in the Magic Kingdom","Illusion (series)","The Magical Quest starring Mickey Mouse","Mickey Mania: The Timeless Adventures of Mickey Mouse","Mickey's Speedway USA","Mickey's Racing Adventure","Disney's Party","Disney's Magical Mirror Starring Mickey Mouse","Disney's Hide and Sneak","Disney Friends","Kingdom Hearts (series)","Epic Mickey (series)","Kinect Disneyland Adventures","Disney Infinity (series)","Disney Magical World","Disney Magical World 2","Where's My Mickey?","Disney Tsum Tsum (game)","Disney Magical Dice","Disney Heroes: Battle Mode","Disney Mirrorverse","Disney Sorcerer's Arena"],"parkAttractions":["Mickey and Minnie's Runaway Railway","Fantasmic!","Mickey's PhilharMagic","Mickey's Royal Friendship Faire","World of Color","Main Street Electrical Parade","Mickey Mouse Revue","Town Square Theater","Mickey's House and Meet Mickey","One Man's Dream II: The Magic Lives On!","Midship Detective Agency","My Friend Duffy","The Golden Mickeys","Festival of Fantasy Parade","Paint the Night Parade","Mickey and the Magical Map","Wonderful World of Animation"],"allies":[],"enemies":[],"sourceUrl":"https://disney.fandom.com/wiki/Mickey_Mouse","name":"Mickey Mouse","imageUrl":"https://static.wikia.nocookie.net/disney/images/9/99/Mickey_Mouse_Disney_3.jpeg","createdAt":"2021-04-12T02:33:01.829Z","updatedAt":"2021-12-20T20:40:04.583Z","url":"https://api.disneyapi.dev/characters/4703","__v":0}]}
*/
