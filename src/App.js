import "./App.css";
import hot_weather_image from "./Images/hot_weather.webp";
import cold_weather_image from "./Images/cold_weather.jpg";
import cloud_image from "./Images/Clouds.webp";
import { FaArrowDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import { get_weather_data } from "./Components/GetData";

function App() {

  const[weather, setweather]  = useState(null)

  useEffect(()=>{
    const fetchdata_weather = async()=>{
      const data = await get_weather_data('delhi')
      console.log(data)
    }
    fetchdata_weather();
  }, []);
  return (
    <div
      className="app"
      style={{ backgroundImage: `url(${cold_weather_image})` }}
    >
      <div className="overlay">
        <div className="container">
          <div className="section section-inputs">
            <input type="text" name="city" placeholder="Enter the city Name" />
            <button>℉</button>
          </div>
          <div className="section section-temperature">
            <div className="icon">
              <h4>New Delhi, IN</h4>
              <img src={cloud_image} alt="" />
              <h3>Cloudy</h3>
            </div>
            <div className="temperature">
              <h1>35℃</h1>
            </div>
          </div>

          <div className="section section-desc">
          <div className="card">
              <div className="card-data">
                <FaArrowDown />
                <small>Min</small>

              </div>
              <h2>32 ℃</h2>
            </div>
            <div className="card">
              <div className="card-data">
                <FaArrowDown />
                <small>Min</small>

              </div>
              <h2>32 ℃</h2>
            </div>
            <div className="card">
              <div className="card-data">
                <FaArrowDown />
                <small>Min</small>

              </div>
              <h2>32 ℃</h2>
            </div>
            <div className="card">
              <div className="card-data">
                <FaArrowDown />
                <small>Min</small>

              </div>
              <h2>32 ℃</h2>
            </div>
            <div className="card">
              <div className="card-data">
                <FaArrowDown />
                <small>Min</small>

              </div>
              <h2>32 ℃</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
