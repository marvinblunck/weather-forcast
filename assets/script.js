let weather ={
    "apiKey: 60da2449f3672fe8aa7716abe1ca815f"
}
function getWeather(){
    // get the api string from the website
    //get rid of curly braces around API key
    var weatherApp="https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=+60da2449f3672fe8aa7716abe1ca815f&units=imperial";
    //grab city name from input
    fetch(weatherApp).then(function(response){
        return response.json()
        
    }).then(function(data){
        console.log(data)
        //display the info from data onto the HTMl
    })
}
//add an event listener to add get weather when you click search