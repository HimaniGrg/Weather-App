
fetch('https://api.openweathermap.org/data/2.5/weather?q=Washington DC&appid=396da7ec7a9cf46301375013583fdeb8')
    .then(response => response.json())
    .then(response => {
        document.getElementById("location").innerText= "Weather in "+response.name+", "+response.sys.country;
        var iconCode = response.weather[0].icon;
        var iconUrl = "https://openweathermap.org/img/wn/"+ iconCode + "@2x.png";
        document.getElementById("weathericon").src=iconUrl;
        document.getElementById("weather").innerText=response.weather[0].main;
        document.getElementById("temp").innerText=((response.main.temp)-272.15).toFixed(2)+' '+"°C";
        document.getElementById("pressure").innerText=response.main.pressure+" "+"in hPa";
        document.getElementById("humidity").innerText=response.main.humidity+" "+"%";
        document.getElementById("speed").innerText=response.wind.speed+" "+"m/s";
        document.getElementById("direction").innerText=response.wind.deg+"°";

        // console.log(response.weather[0].main);
        // console.log(response.name);

        if(response.weather[0].main = "Clouds"){
            var background = "./cloud.jfif";
            document.getElementById("background").src=background;
        }
        else if(response.weather[0].main = "Clear"){
            var background = "./clearsky.jfif";
            document.getElementById("background").src=background;
        }
        else if(response.weather[0].main = "Rainy"){
            var background = "./rain.jfif";
            document.getElementById("background").src=background;
        }
    })
