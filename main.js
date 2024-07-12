const apiKey = "a76decfec975a95c7ae16e61f3c7681d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metrics&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    document.querySelector(".weather").style.display = "block";
    
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "/storage/emulated/0/Download/VLC/clouds.png";
    } 
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "/storage/emulated/0/Download/VLC/clear.png";
    } 
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "/storage/emulated/0/Download/VLC/rain.png";
    } 
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "/storage/emulated/0/Download/VLC/drizzle.png";
    } 
    else if(data.weather[0].main == "Mist"){  // Corrected this line
        weatherIcon.src = "/storage/emulated/0/Download/VLC/mist.png";
    }
    
    document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

    
searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);
});
