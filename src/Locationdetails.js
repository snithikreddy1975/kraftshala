import React from 'react'
import './App.css'

function Locationdetails(props) {
  const {data}=props
  const {main,wind,weather}=data
  const temperature=Math.round(main["temp"]-273,2)
  const timestamp=data['dt']
  const date = new Date(timestamp * 1000);
  

  return (
    <div className='weather-app'>
        <li>
            <h4>Location: {data["name"]}</h4>
            <h4>Temperature: {temperature}C</h4>
            <h4>Date: {date.toUTCString()}</h4>
            <h4>Humidity: {main["humidity"]}</h4>
            <h4>Wind Speed: {wind["speed"]}</h4>
            <h4>Weather Description: {weather[0]["description"]}</h4>
        </li>
      
    </div>
  )
}

export default Locationdetails