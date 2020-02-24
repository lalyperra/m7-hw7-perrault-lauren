var cityName = document.getElementById('place');

var weatherDescription = document.getElementById('weather');


var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here

        //print city name at end of header <h1>

        var locationName= document.createTextNode(apiResult.name);
        cityName.appendChild(locationName);

        //print weather description after main section text <p> hint: create text node, append to an element to add to DOM and show on page
        var weatherForecast = document.createTextNode(apiResult.weather[0].description);
        weatherDescription.appendChild(weatherForecast);
    }
};

xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=99353,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();
