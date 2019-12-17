//Get and display the weather data
document.getElementById("search").onkeypress = function(event) {
    if (event.keyCode == 13 || event.which == 13) {
        getWeatherData(document.getElementById("search").value); 
        //displayWeatherData(); 
    }
}

function getWeatherData (cityName) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=31b2a5013f4c6aafb5060edf826d41ca')
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log("Temperature: " + (data.main.temp - 273.15).toFixed(1) + "ºC");
        })
        .catch(err => {
            console.log("There has been an error. Make sure you have entered the city's name correctly.");
        })
    
}



