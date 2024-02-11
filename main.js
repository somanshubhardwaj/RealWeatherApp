function displayoutput(ans){
    // const outputContainer = document.getElementById('outputContainer');
    // const paragraph = document.createElement('p');
    // paragraph.textContent = JSON.stringify(ans,null,2);
    // outputContainer.appendChild(paragraph);
    document.querySelector(".temp").innerHTML = ans.main.temp;
    document.querySelector(".cityname").innerHTML = ans.name;
    document.querySelector(".weather").innerHTML = ans.weather[0].main;
    document.querySelector(".windspeed").innerHTML = ans.wind.speed;
}
function updateWeatherImages(weatherCondition) {
    // Retrieve the HTML element with the 'weather-image' id
    const weatherImageElement = document.getElementById('weather-image');

    // Define a mapping of weather conditions to image sources
    const weatherImages = {
      Clear: "/photos/clear.png",
      Clouds: "/photos/cloudy.png",
      Rain: "/photos/rainy.png",
      Snow: "/photos/snowy.png",
      // Add more conditions as needed
    };
    // Update the 'src' attribute of the image based on the weather condition
    if (weatherImages.hasOwnProperty(weatherCondition)) {
        const imagePath = weatherImages[weatherCondition];
        weatherImageElement.src = imagePath;  
    }
}
async function getWeather() {
    const userEnteredLatitude = document.getElementById('latitude').value;
    const userEnteredLongitude = document.getElementById('longitude').value;
    const apiKey = '1c21f7555d4e44186727dd098d834845';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${userEnteredLatitude}&lon=${userEnteredLongitude}&units=metric&appid=${apiKey}`;
    const response = await fetch(apiUrl + `&aapid=${apiKey}`)
    var data =await response.json();
   
    displayoutput(data);
    updateWeatherImages(data.weather[0].main);
}

