const getForecast = document.getElementById("get-forecast")
const select = document.querySelector("select")
const weatherDiv = document.getElementById("weather")

//get forecast button
getForecast.addEventListener("click",()=>{
    if(select.value){
        console.log(select.value)
        weatherDiv.style.display = "block"
    }
    else{
        weatherDiv.style.display = "none"
    }
})

//weather functions
const getWeather = (city)=>{

}

const showWeather = (city)=>{
    
}