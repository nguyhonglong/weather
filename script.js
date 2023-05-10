$(document).ready(function() {
    var apiKey = "422415079971cd82421b289c5f4795bb"; // Replace with your API key
    var city = "Hanoi"; // Replace with the city you want to get the weather for
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
    url1 = "http://worldtimeapi.org/api/timezone/Asia/Ho_Chi_Minh"

    $.getJSON(url, function(data) {
        var temp = Math.round(data.main.temp - 273.15); // Convert temperature from Kelvin to Celsius and round to nearest integer
        var description = data.weather[0].description;
        var windSpeed = data.wind.speed;
        var weatherText = "Current temperature in " + city + " is " + temp + "°C, wind speed is " + windSpeed +" km/h, with " + description + ".";
        $("#weather").text(weatherText);
        
    });

    
    
    setInterval(function() {
        $.getJSON(url1, function(data){
            var time = "";
            for(var i = 11; i < 19;i++){
                time += data.datetime[i]; 
            }
            $("#time").text(time);
        })
    }, 1000);

   
});