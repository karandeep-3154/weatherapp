const API_KEY = "6dfbde1aa39558040c8a86ac12e5a359";

const icon_url = (icon) => 
    `https://openweathermap.org/img/wn/${icon}@2x.png`


const get_weather_data = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

    const {weather, 
    main:{temp,  feels_like, temp_min, temp_max, pressure, humidity},
    wind:{speed},
    sys:{country},
    name
    } = data;

    const {description, icon} = weather[0];

    return {description, iurl:icon_url(icon), temp, feels_like, temp_max, temp_min, pressure, humidity, speed, country, name};
};

export { get_weather_data };
