import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchWeatherAction } from "./redux/slice/WeatherSlice";
var d2d = require("degrees-to-direction");

function App() {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherAction("delhi"));
  }, []);

  const state = useSelector((state) => state);
  const { weather, loading, error } = state;
  console.log(state);

  return (
    <>
      <section className="container">
        <div className="header">
          <h1 className="header-heading">Weather App</h1>
          <h2 className="header-paragraph">
            Find out the current weather setuation around the world with a
            search.
          </h2>
        </div>
        <div className="input-container">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Search City"
            className="input-container__input"
          />
          <button
            className="input-container__button"
            onClick={() => dispatch(fetchWeatherAction(city))}
          >
            Search
          </button>
        </div>
        <div className="card-container">
          {loading ? (
            <h1 className="text-loading">Loading please wait...</h1>
          ) : error ? (
            <h1 className="text-error">{error?.message}</h1>
          ) : (
            <div className="card-details_container">
              <div className="card-details">
                <img
                  className="card-image"
                  src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
                  alt="Weather image"
                />
                <h1>{weather?.weather[0].main}</h1>{" "}
              </div>
              <h1 className="card-details_temparature">
                {Math.floor(Number(weather?.main.temp - 273.15))}
                <sup>°C</sup>
              </h1>
              <h3 className="card-details_place">
                {weather?.name}, {weather?.sys?.country}
              </h3>
              <p className="card-details_description">
                The weather condition in {weather?.name},{" "}
                {weather?.sys?.country} is describe as:{" "}
                {weather?.weather[0].description} with{" "}
                {Math.floor(Number(weather?.main.temp - 273.15))}°C of
                temperature and with {weather?.main?.humidity} % of humidity.
              </p>
              <h3>
                <span className="card-details__max-temp">
                  Max: {Math.floor(Number(weather?.main?.temp_max - 273.15))}°C
                </span>{" "}
                &nbsp;&nbsp;
                <span className="card-min-temp">
                  Max: {Math.floor(Number(weather?.main?.temp_min - 273.15))}°C
                </span>
              </h3>
              <p className="card-container_wind">
                Wind: {d2d(weather?.wind?.deg)} {weather?.wind?.speed}mi/h
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default App;
