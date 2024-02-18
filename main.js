function displayoutput(ans) {
  document.querySelector(".temp").innerHTML = ans.main.temp;
  document.querySelector(".cityname").innerHTML = ans.name;
  document.querySelector(".weather").innerHTML = ans.weather[0].main;
  document.querySelector(".windspeed").innerHTML = ans.wind.speed;
}
function updateWeatherImages(weatherCondition) {
  const weatherImageElement = document.getElementById("weather-image");
  const weatherImages = {
    Clear: "./photos/clear.png",
    Clouds: "./photos/cloudy.png",
    Rain: "./photos/rainy.png",
    Snow: "./photos/snowy.png",
  };
  
  if (weatherImages.hasOwnProperty(weatherCondition)) {
    const imagePath = weatherImages[weatherCondition];
    weatherImageElement.src = imagePath;
  }
}
async function getWeather() {
  const userEnteredCity = document.getElementById("latitude").value;
  const userEnteredCountry = document.getElementById("longitude").value;

  const apiKey = "1c21f7555d4e44186727dd098d834845";
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${userEnteredCity},${userEnteredCountry}&appid=${apiKey}&units=metric`;
  const response = await fetch(apiUrl + `&aapid=${apiKey}`);
  var data = await response.json();
  displayoutput(data);
  updateWeatherImages(data.weather[0].main);
}
