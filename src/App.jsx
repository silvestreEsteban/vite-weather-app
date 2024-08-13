import './App.css'
const cityInput = document.getElementById('city-input')
const displayWeatherInfo = document.getElementById('condition')
const errorMessage = document.getElementById('text-output')
import.meta.env.WEATHER_API_KEY
// import { useState } from 'react';

function App() {

// const [city, changeCity] = useState({currentCity})
// 


function handleClick() {
let currentCity = cityInput.value;
const getWeather = fetch(
  `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.WEATHER_API_KEY}&q=${currentCity || "Tokyo" }&aqi=no`
 )
  .then((res) => res.json())
  .then((data) => {
    displayWeatherInfo.innerHTML =
    `<p>${data.location.name}'s temperature is ${data.current.temp_c}℃.</p>
     <p>It's ${data.current.condition.text}.</p>
     <img src="${data.current.condition.icon}" alt="icon"/>
     `;
  })
  .catch((err) => {
    console.log(err);
    errorMessage.innerHTML = `Please enter a valid city.`
  })
 }
  
  return (
    <>
     <div className="main-body">
            <div className="form-body">
               <h1 id='header1'>Silvestre's Vite Weather App</h1>
               <form className='form' id='form'>
                 <label htmlFor="city-input">Please enter a city:</label>
                 <br />
                 <input type='text' id='city-input' placeholder='e.g. Tokyo'></input>
                 <br />
                 <button type='submit' id="submit-button" onClick={handleClick}>Search</button>
               </form>
               <div className='text-output' id='text-output'>
                <h2>Your weather information:</h2>
                <p id="condition"></p>
                <span id="icon"></span>
               </div>
            </div>
            
        </div>
    </>

  )
}

export default App
