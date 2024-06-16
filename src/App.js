import axios from 'axios'
import React, { useState } from 'react'
import Locationdetails from './Locationdetails'
import './App.css'

function App() {
  const [toggleDarkMode,setToggleDarkMode]=useState(false)
  const [cityName,setCityName]=useState('')
  const [weatherDetails,setData]=useState([])
  const toggleMode=toggleDarkMode ? "bg-container1": "bg-container2"
 
  const fetchApi=async()=>{
    try{
      const apiKey="fc3ab206625aa33b379da21e43d52dce"
      const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
      const data=await response.data
      setData([...weatherDetails,data])
      setCityName("")
      
    }
    catch(err){
      setCityName("")
      alert("Enter valid City Name")
      
    }
  }
  const toggleButton=()=>{
    setToggleDarkMode(!toggleDarkMode)
  }
  return (
    <div className={toggleMode}>
      <input type='search' value={cityName} placeholder='Enter city name' onChange={e=>setCityName(e.target.value)} />
      <button onClick={fetchApi}>Search</button>
      <div className='location'>
        {weatherDetails.length>0 && weatherDetails.map(item=><Locationdetails key={item["weather"][0]} data={item} />)}<br/>
      </div>
      <button onClick={toggleButton}>{toggleDarkMode?"Light Mode":"Dark Mode"}</button>
    </div>
  )
}

export default App