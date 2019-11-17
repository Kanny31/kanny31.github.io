const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)

    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject){

const towns = jsonObject["towns"];

for (let i = 0; i < towns.length; i++ ) {

    let card = document.createElement("div");
    let h2 = document.createElement("h2");
    let motto = document.createElement("h3");
    let year = document.createElement("p");
    let pop = document.createElement("p");
    let rain = document.createElement("p");
    let image = document.createElement("img");

    if (towns[i].name == "Fish Haven" ||towns[i].name == "Soda Springs" || towns[i].name== "Preston")

   { h2.textContent = towns[i].name;
    motto.textContent = towns[i].motto;
    year.textContent = 'Year Founded: ' + towns[i].yearFounded;
    pop.textContent = 'Population: ' + towns[i].currentPopulation;
    rain.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall + 'in.';
   
    if (i== "Fish Haven") {
    image.setAttribute('src',"https://raw.githubusercontent.com/Kanny31/kanny31.github.io/master/lesson9/towns/herd-of-cattle-in-daytime-841303.jpg";
    image.setAttribute('alt', towns[i]."Fish Haven");
    }
    else if (i== "Soda Springs") {
    image.setAttribute('src',"https://raw.githubusercontent.com/Kanny31/kanny31.github.io/master/lesson9/towns/clouds-country-countryside-dirt-road-461755.jpg";
    image.setAttribute('alt', towns[i]."Soda Springs");
    }

    else { 
    image.setAttribute('src',"https://raw.githubusercontent.com/Kanny31/kanny31.github.io/master/lesson9/towns/green-grass-field-during-day-time-206893.jpg";
    image.setAttribute('alt', towns[i]."Preston");
    }
    card.appendChild(h2);
    card.appendChild(motto);
    card.appendChild(year);
    card.appendChild(pop);
    card.appendChild(rain);
    card.appendChild(image);
  
    document.querySelector('div.towns').appendChild(card);
   }
   
  
    
}
});


/* citation: Mckenzie Lewis and Ramsy harris