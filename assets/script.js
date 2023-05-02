var button=document.querySelector("#search");
var input= document.querySelector(".search-bar");
function getWeather(){
    // get the api string from the website
    var city= input.value
    localStorage.setItem("city", city)
    //get rid of curly braces around API key
    var weatherApp="https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=60da2449f3672fe8aa7716abe1ca815f&units=imperial";
    //grab city name from input
    fetch(weatherApp).then(function(response){
        return response.json()
    }).then(function(data){
        console.log(data)
        //display the info from data onto the HTMl
        for(var i=0; i<5; i++){
        document.querySelector(".temperature"+i).textContent="temperature: "+data.list[i*8].main.temp+ "*F"
        document.querySelector(".date"+i).textContent="Todays Date: "+data.list[i*8].dt_txt.split(" ")[0]
        document.querySelector(".wind"+i).textContent="Wind speed: "+data.list[i*8].wind.speed
        document.querySelector(".humidity"+i).textContent="humidity: "+data.list[i*8].main.humidity+ "%"
        document.querySelector(".icon"+i).src=`http://openweathermap.org/img/w/${data.list[i*8].weather[0].icon}.png`;
        document.querySelector(".description"+i).textContent="description: "+data.list[i*8].weather[0].description
    }
    document.querySelector("#display-city").textContent=city
    })
}
//add an event listener to add get weather when you click search
var displayCity=localStorage.getItem("city");
document.querySelector("#display-city").textContent=displayCity
button.addEventListener("click", getWeather)

