import "./current-weather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">City Name</p>
          <p className="weather-description">Weather Desc.</p>
        </div>
        <img alt="weather icon" className="weather-icon" src="icons/01d.png" />
      </div>
      <div className="bottom">
        <p className="temperature">15°C</p>
        <div className="details">
            <div className="parameter-row">
                <span className="parameter-label">Details</span>
            </div>
            <div className="parameter-row">
                <span className="parameter-label">Feels like</span>
                <span className="parameter-value">20°C</span>
            </div>
            <div className="parameter-row">
                <span className="parameter-label">Wind Speed</span>
                <span className="parameter-value">2 km/h</span>
            </div>
            <div className="parameter-row">
                <span className="parameter-label">Humidity</span>
                <span className="parameter-value">20%</span>
            </div>
            <div className="parameter-row">
                <span className="parameter-label">Pressure</span>
                <span className="parameter-value">15 hPa</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
