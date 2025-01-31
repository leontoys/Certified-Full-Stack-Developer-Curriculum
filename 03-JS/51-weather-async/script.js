const getForecast = document.getElementById("get-forecast")
const select = document.querySelector("select")
const weatherDiv = document.getElementById("weather")
const weatherIcon = document.getElementById("weather-icon")
const mainTemperature = document.getElementById("main-temperature")
const feelsLike = document.getElementById("feels-like")
const humidity = document.getElementById("humidity")
const wind = document.getElementById("wind")
const windGust = document.getElementById("wind-gust")
const weatherMain = document.getElementById("weather-main")
const locationCity = document.getElementById("location")

//get forecast button
getForecast.addEventListener("click",()=>{
    if(select.value){
        //console.log(select.value)
        showWeather(select.value)
        weatherDiv.style.display = "block"        
    }
    else{
        weatherDiv.style.display = "none"
    }
})

//weather functions
const getWeather = async (city) => {
    return await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`)
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.error(error))
}

const showWeather = async (city)=>{
    //console.log("show weather",city)
    const weather = await getWeather(city)
    if(weather.error){
        alert(`Something went wrong, please try again later`)
    }
    else{
        //console.log("weather",weather.wind)
        //now update html
        weatherIcon.src = weather.weather[0].icon ? weather.weather[0].icon : "N/A"
        mainTemperature.innerText = weather.main.temp ? weather.main.temp : "N/A"
        feelsLike.innerText = weather.main.feels_like ? weather.main.feels_like : "N/A"
        humidity.innerText = weather.main.humidity ? weather.main.humidity : "N/A"
        wind.innerText = weather.wind.speed ? weather.wind.speed : "N/A"
        windGust.innerText = weather.wind.gust ? weather.wind.gust : "N/A"
        locationCity.innerText = weather.name ? weather.name : "N/A"
        weatherMain.innerText = weather.weather[0].main ? weather.weather[0].main : "N/A"
    }
}