
let weather = {
    apiKey: "6620b4dfcaf9fbc698bc1153a9511473",
    fetchWeather: function(city){
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name} = data;
        const  {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind; 
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector("img").src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
        document.querySelector(".wind").innerText = `Wind Speed: ${speed}km/h`;
        document.querySelector(".weather").classList.remove("loading");
    }
}

document.querySelector(".search button").addEventListener('click', ()=>{
    let data = document.querySelector("input").value;
    weather.fetchWeather(data);
}); 

document.querySelector(".search-bar").addEventListener('keyup',(event)=>{
    if(event.key == "Enter"){
        let data = document.querySelector("input").value;
        weather.fetchWeather(data);
    }
});


weather.fetchWeather("Bhilai");