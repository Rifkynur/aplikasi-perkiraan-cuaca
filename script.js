const input = document.querySelector(".input");
const search = document.querySelector(".button");

async function checkWeather(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=28d9071995d57e204d51f29ac8080b22&units=metric`);
  if (response.status == 404) {
    document.querySelector(".error").innerHTML = `<p>Tidak ada kota dengan nama ${city}</p>`;
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".error").style.display = "block";
  } else {
    let data = await response.json();

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&deg;C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    document.querySelector(".weather-icon").src = "images/" + data.weather[0].main + ".png";
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
search.addEventListener("click", function () {
  checkWeather(input.value);
});
input.value = null;
