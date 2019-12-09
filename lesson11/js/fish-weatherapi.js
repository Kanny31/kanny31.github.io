const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=f59e1a32a18fcdcb1bcc9c2905156e33";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    var temper = jsObject.main.temp.toFixed(0);

    document.getElementById('weather').textContent = jsObject.id.main;
    document.getElementById('high').textContent = temper;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('speed').textContent = jsObject.wind.speed;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; 
    const desc = jsObject.weather[0].description; 
    document.getElementById('weather').textContent = desc;

    var day = "";
    let count = 0;
    for (let i = 0; i < jsObject.list.length; i++) {
      if (jsObject.list[i].dt_txt.includes('18:00:00')) {
        count++;
        var temper = jsObject.list[i].main.temp.toFixed(0);

        let myhigh = 'high' + count;
        document.getElementById(myhigh).textContent = temper;

        let myday = 'day' + count;
        var d = new Date();
        var n = d.getDay();
        n = n + count - 1;
        if (n > 6){
          (n = n-7);
        }



        if (n == 0) {
          day = "Sunday";
        } else if (n == 1) {
          day = "Monday";
        } else if (n == 2) {
          day = "Tuesday";
        } else if (n == 3) {
          day = "Wednesday";
        } else if (n == 4) {
          day = "Thursday";
        } else if (n == 5) {
          day = "Friday";
        } else if (n == 6) {
          day = "Satday";
        }

        document.getElementById(myday).textContent = day;

        

      }

    }
  });
  /* citation: Help from Mckenzie Lewsis and Johathan Lundquist */ 