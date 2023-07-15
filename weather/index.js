var search = document.getElementsByClassName('search')
var city = document.getElementsByClassName('city')
var country = document.getElementsByClassName('country')
var value = document.getElementsByClassName('value')
var shortdesc = document.getElementsByClassName('short-desc')
var visibility = document.querySelector('.visibility span')
var sun = document.querySelector('.sun span')
var wind = document.querySelector('.wind span')

function changWeatherUI(){
    search.value.trim()
    let apiURL= 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'  

    let data = await fetch(apiURL).then(res=> res.json())
    console.log(data);
}

changWeatherUI();