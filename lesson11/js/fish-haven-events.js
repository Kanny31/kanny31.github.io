const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)

    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject){

const towns = jsonObject["towns"];

for (let i = 0; i < towns.length; i++ ) {

    if (towns[i].name== "Fish Haven"){

    let card = document.createElement("article");
    let fillCard = document.createElement("section");
    let heading = document.createElement("h2");
    let events = document.createElement("h4");
   
    heading.textContent = 'Local Events Include:';
    events.textContent = towns[i].events;

    fillCard.appendChild(heading);
    fillCard.appendChild(events);
    card.appendChild(fillCard);
    
    document.querySelector('div.fish-havens-events').appendChild(card);
   }
}
});
/* citation: Help from Mckenzie Lewsis and Johathan Lundquist */ 