import "./App.css";
import hot_weather_image from "./Images/hot_weather.webp";
import cold_weather_image from "./Images/cold_weather.jpg";
import cloud_image from "./Images/Clouds.webp";
import { useEffect, useState } from "react";
import { get_weather_data } from "./Components/GetData";
import Description from "./Components/Description";

function App() {
  const [weather, setweather] = useState(null);
  const [city, setcity] = useState(null);
  const onChange = (e)=>{
    // console.log("hi1")

     setcity(e.currentTarget.value);
     //console.log("hi2")
}
  useEffect(() => {
    if(city!=null){
    const fetchdata_weather = async () => {
      const data = await get_weather_data(city, "metric");
      // console.log(data)
      setweather(data);
    };
    fetchdata_weather();
  }
  },[]);
  const onclick = ()=>{
    const fetchdata_weather = async () => {
      const data = await get_weather_data(city, "metric");
      // console.log(data)
      setweather(data);
    };
    fetchdata_weather();
  }
  return (
    <div
      className="app"
      style={{ backgroundImage: `url(${weather&&weather.temp<20?cold_weather_image:hot_weather_image})` }}
    >
      <div className="overlay">
        {/* {weather && ( */}
          <div className="container">
            <div className="section section-inputs">
              <input
                type="text"
                name="city"
                placeholder="Enter the city Name"
                value={city}
                onChange={onChange}
              />
              <button onClick={onclick}>Get Weather Updates</button>
            </div>
            <div className="section section-temperature">
              <div className="icon">
                {weather&&(<h4>{`${weather.name}, ${weather.country}`}</h4>)}
                {!weather&&(<h4>{`Enter the city to see the Weather Forecast...`}</h4>)}
                {weather&&(<img src={weather.iurl} alt={cloud_image} />)}
                
                {weather&&(<h3>{weather.description}</h3>)}
              </div>
              <div className="temperature">
                {weather&&(<h1>{`${weather.temp.toFixed()} ℃`}</h1>)}
              </div>
            </div>

            {weather&&(<Description weather={weather} />)}
          </div>
        
      </div>
    </div>
  );
}

export default App;
