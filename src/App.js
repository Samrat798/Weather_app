import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchWeatherAction } from "./redux/slice/WeatherSlice";
import Card from "./components/Card";
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
            <Card
              image={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
              condition={weather?.weather[0].main}
              temparature={Math.floor(Number(weather?.main.temp - 273.15))}
              country={weather?.sys?.country}
              city={weather?.name}
              description={weather?.weather[0].description}
              humidity={weather?.main?.humidity}
              max={Math.floor(Number(weather?.main?.temp_max - 273.15))}
              min={Math.floor(Number(weather?.main?.temp_min - 273.15))}
              windDirection={d2d(weather?.wind?.deg)}
              windSpeed={weather?.wind?.speed}
            />
          )}
        </div>
      </section>
    </>
  );
}

export default App;
