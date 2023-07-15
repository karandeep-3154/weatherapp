import "./App.css";
import hot_weather_image from "./Images/hot_weather.webp";
import cold_weather_image from "./Images/cold_weather.jpg";
import cloud_image from "./Images/Clouds.webp";
function App() {
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


      
    </div>
   </div>
    </div>
  );
}

export default App;
