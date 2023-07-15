import "./App.css";
import hot_weather_image from "./Images/hot_weather.webp";
import cold_weather_image from "./Images/cold_weather.jpg";
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
    </div>
   </div>
    </div>
  );
}

export default App;
