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
    
      const mondayimagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[6].weather[0].icon + '.png';
        const mondesc = jsObject.list[6].weather[0].description;
       

        const tuesimagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[14].weather[0].icon + '.png';
        const tuesdesc = jsObject.list[14].weather[0].description;
      

        const wedimagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[22].weather[0].icon + '.png';
        const weddesc = jsObject.list[22].weather[0].description;
       

        const thurimagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[30].weather[0].icon + '.png';
        const thurdesc = jsObject.list[30].weather[0].description;
        

        const friimagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[38].weather[0].icon + '.png';
        const fridesc = jsObject.list[38].weather[0].description;
        

     
     }
    }
    });
    /* citation: Help from Mckenzie Lewsis and Johathan Lundquist */ 