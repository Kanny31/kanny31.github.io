const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=f59e1a32a18fcdcb1bcc9c2905156e33";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    var temper = jsObject.main.temp.toFixed(0);

    document.getElementById('weather').textContent = jsObject.id.main;
    document.getElementById('high').textContent = temper;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('speed').textContent = jsObject.wind.speed;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('weather').textContent = desc;

  });

  const jsonURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=bd99fbf52e995e4af1074e56feb731ab";

  fetch(jsonURL)
    .then((response) => response.json())
    .then((jsObject) => {
    console.log(jsObject);

    for (let i = 0; i < jsObject.list.length; i++) {
      if (jsObject.list[i].dt_txt.includes('18:00:00')) {

        document.getElementById('day1').textContent = (jsObect.list[i].dt_txt);
        document.getElementById('day2').textContent = (jsObect.list[i].dt_txt);
        document.getElementById('day3').textContent = (jsObect.list[i].dt_txt);
        document.getElementById('day4').textContent = (jsObect.list[i].dt_txt);
        document.getElementById('day5').textContent = (jsObect.list[i].dt_txt);


        var high1 = jsObect.list[i].main.temp
        
        document.getElementById('high1').textContent = high1.toFixed(0);
        document.getElementById('high2').textContent = jsObect.list[i].main.temp.toFixed(0);
        document.getElementById('high3').textContent = jsObect.list[i].main.temp.toFixed(0);
        document.getElementById('high4').textContent = jsObect.list[i].main.temp.toFixed(0);
        document.getElementById('high5').textContent = jsObect.list[i].main.temp.toFixed(0);
        
        document.getElementById()
     }
    }
    });

    /* citation: Help from Mckenzie Lewsis and Johathan Lundquist */ 