const searchWeather = () =>{
    const searchWeatherText = document.getElementById('search-field');
    const searchField = searchWeatherText.value;
    console.log(searchField);
    searchWeatherText.value ='';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${searchField}&units=metric&appid=eebd0125cc841fad57413520184a871f`;
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data =>displayWeatherUpdate(data));
}
const displayWeatherUpdate =weather =>{
    console.log(weather);
const weatherDiv = document.getElementById('search-result');
weatherDiv.textContent ='';
const div = document.createElement('div');
div.classList.add('col');
div.innerHTML =  `  <div  class="weather-status text-white text-center">
<img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
      <h1>${weather.name}</h1>
      <h3><span> Temperature : ${Math.round(weather.main.temp-273)}</span>&deg;C</h3>
      <h3><span> Temperature : ${weather.main.temp-273}</span>&deg;C</h3>
      <h3><span> Wind : ${weather.wind.deg}</span>&deg;C</h3>
      <h1 class="lead">Clouds : ${weather.clouds.all}</h1>
      <h1 class="lead">Sunrise : ${weather.sys.sunrise}</h1>
      <h1 class="lead">Sunset : ${weather.sys.sunset}</h1>
</div>`
weatherDiv.appendChild(div);
}
