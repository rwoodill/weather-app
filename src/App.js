import "./App.css";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";
import { WEATHER_API_URL, OPEN_WEATHER_API_KEY } from "./api";
import { useState } from "react";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const unit_type = "metric";

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=${unit_type}`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}&units=${unit_type}`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherRes = await response[0].json();
        const forecastRes = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherRes });
        setForecast({ city: searchData.label, ...forecastRes });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast}/>}
    </div>
  );
}

export default App;
