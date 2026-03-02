

const API_KEY = '7b953070fd5a615ea59b73c535d29c00';
const form = document.querySelector('#weather_form');
const weatherInfo = document.querySelector('#weatherResult');
const history = document.querySelector('.history');
let historyData = []
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const city = document.getElementById("city");  
    const data = city.value;

    if (data) {
        getData(data)
    }
});

async function getData(data) {
    try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${API_KEY}`);
            const weatherData = await response.json();

            if (weatherData.cod === 200) {
                weatherInfo.innerHTML = `
                <h3>Weather Information</h3>
                <p>City: ${weatherData.name}</p>
                <p>Temperature: ${(weatherData.main.temp - 273).toFixed(1)}°C</p>
                <p>Weather: ${weatherData.weather[0].main}</p>
                <p>Wetness: ${weatherData.main.humidity}%</p>
                <p>Wind: ${weatherData.wind.speed} m/s</p>
                `
                if(historyData.includes(data)===false){
                    historyData.push(data)
                    localStorage.setItem('history', JSON.stringify(historyData))
                } 
                showHistory()
            } else {
                weatherInfo.innerHTML = `<h3>Weather Information</h3><p>City Not Found</p>`;
            }

        } catch (error) {
            console.error('Error:', error);
        }
}
function showHistory() {
    history.innerHTML = ""
    if(localStorage.getItem('history')){
        historyData = JSON.parse(localStorage.getItem('history'))
        historyData.forEach((ele) => {
            const li=document.createElement('button')
            li.textContent=ele
            history.appendChild(li)
            li.addEventListener('click', () => { 
                getData(ele)
        
        })
    })
}
}
showHistory()