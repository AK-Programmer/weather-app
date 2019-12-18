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
            if (data.cod == "404") {
                document.getElementById("city").innerHTML = "There has been an error. Make sure you typed the name of the city correctly."; 
                console.log("404 Error");
                document.getElementById("temp").innerHTML = ""; 
                document.getElementById("feels-like").innerHTML = ""; 
                document.getElementById("background").className = "bg-gradient-chill main-font";

            } else {
                console.log(data);

                document.getElementById("city").innerHTML = "The Weather In: " + data.name; 
                document.getElementById("temp").innerHTML = "The Temperature is " + (data.main.temp - 273.15).toFixed(1) + "ºC"; 
                document.getElementById("feels-like").innerHTML = "The Temperature is " + (data.main.feels_like - 273.15).toFixed(1) + "ºC"; 
                

                if (data.weather.description == "clear sky") {
                    document.getElementById("weather").innerHTML = "The sky is clear ";

                //Clouds
                } else if (data.weather.description == "few clouds") {
                    document.getElementById("weather").innerHTML = "It's slightly cloudy outside ";
                } else if (data.weather.description == "scattered clouds") {
                    document.getElementById("weather").innerHTML = "There are scattered clouds outside ";
                } else if (data.weather.description == "broken clouds") {
                    document.getElementById("weather").innerHTML = "There are scattered clouds outside ";
                } else if (data.weather.description == "overcast clouds") {
                    document.getElementById("weather").innerHTML = "It's cloudly outside ";
                
                //Precipitation
                } else if (data.weather.main == "Drizzle") {
                    document.getElementById("weather").innerHTML = "It's drizzling outside ";
                } else if (data.weather.main == "Rain") {
                    document.getElementById("weather").innerHTML = "It's raining outside ";
                } else if (data.weather.main == "Snow") {
                    document.getElementById("weather").innerHTML = "It's snowing outside ";
                } else if (data.weather.main == "Thunderstorm") {
                    document.getElementById("weather").innerHTML = "There are thunderstorms ";

                //Atmosphere
                } else if (data.weather.main == "Mist") {
                    document.getElementById("weather").innerHTML = "It's misty outside ";
                } else if (data.weather.main == "Fog") {
                    document.getElementById("weather").innerHTML = "It's foggy outside ";
                } else if (data.weather.main == "Tornado") {
                    document.getElementById("weather").innerHTML = "It's tornado weather! ";
                } else if (data.weather.main == "Dust") {
                    document.getElementById("weather").innerHTML = "It's dusty outside! ";
                } 
            }
        })
        .catch(err => {
        })
    
}



