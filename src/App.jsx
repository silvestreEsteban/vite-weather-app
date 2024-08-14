import './App.css'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
import { useState } from 'react';

function App() {
 
 //const [weatherInfo, setWeatherInfo] = useState(`<p>Weather Info</p>`)
 const [city, setCity] = useState('')
 const [info, setInfo] = useState('')
 


  
 function handleClick(e) {
e.preventDefault()
const getWeather = fetch(
  `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
 )
  .then((res) => res.json())
  .then((data) => {
    const img = data.current.condition.icon
    setInfo(
    `${data.location.name}'s temperature is ${data.current.temp_c}℃.
     It's ${data.current.condition.text}.
     ${img}`);
     

  })
  .catch((err) => {
    console.log(err);
    setInfo(`Please enter a valid city`);
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
                 <input type='text' id='city-input' placeholder='e.g. Tokyo' onChange={event => setCity(event.target.value)}></input>
                 <br />
                 <button type='submit' id="submit-button" onClick={handleClick}>Search</button>
               </form>
               <div className='text-output' id='text-output'>
                <h2>Your weather information: {info}</h2>
                <p id="condition"></p>
                <span id="icon"></span>
               </div>
            </div>
            
        </div>
    </>

  )
}

export default App
