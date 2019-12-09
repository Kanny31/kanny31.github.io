const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=f59e1a32a18fcdcb1bcc9c2905156e33";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

    document.getElementById('monday').textContent = jsObject.list[6].main.temp;
        document.getElementById('tuesday').textContent = jsObject.list[14].main.temp;
        document.getElementById('wednesday').textContent = jsObject.list[22].main.temp;
        document.getElementById('thursday').textContent = jsObject.list[30].main.temp;
        document.getElementById('friday').textContent = jsObject.list[38].main.temp;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  
    const desc = jsObject.weather[0].description; 
    document.getElementById('weather').textContent = desc;

     
     }
    }
    });

    /* citation: Help from Mckenzie Lewsis and Johathan Lundquist */ 
