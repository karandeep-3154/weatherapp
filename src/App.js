import "./App.css";
import hot_weather_image from "./Images/hot_weather.webp";
import cold_weather_image from "./Images/cold_weather.jpg";
import cloud_image from "./Images/Clouds.webp";
import { useEffect, useState } from "react";
import { get_weather_data } from "./Components/GetData";
import Description from "./Components/Description";

function App() {

  const[weather, setweather]  = useState(null);
  const[city, setcity] = useState("argentina");
  const getresults = (e) =>{
    console.log("clicked")
    setcity(e.currentTarget.value);
  }
  
  useEffect(()=>{
    const fetchdata_weather = async()=>{
      const data = await get_weather_data(city,"metric")
      // console.log(data)
      setweather(data);
    }
    fetchdata_weather();
  
}
, );
  return (
    <div
      className="app"
      style={{ backgroundImage: `url(${cold_weather_image})` }}
    >
      <div className="overlay">

      {weather && (
        <div className="container">
          <div className="section section-inputs">
            <input  type="text" name="city" placeholder="Enter the city Name" />
            <button onClick={(e)=>getresults(e)}>℃</button>
          </div>
          <div className="section section-temperature">
            <div className="icon">
              <h4>{`${weather.name}, ${weather.country}`}</h4>
              <img src={weather.iurl} alt={cloud_image} />
              <h3>{weather.description}</h3>
            </div>
            <div className="temperature">
              <h1>{`${weather.temp.toFixed()} ℃`}</h1>
            </div>
          </div>

        <Description weather={weather}/>
        </div>)}

      </div>
    </div>
  );
}

export default App;
