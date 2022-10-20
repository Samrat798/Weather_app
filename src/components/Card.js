import React from "react";
import "./Card.css";

const card = ({
  image,
  condition,
  temparature,
  country,
  city,
  description,
  humidity,
  max,
  min,
  windDirection,
  windSpeed,
}) => {
  return (
    <div className="card-details_container">
      <div className="card-details">
        <img className="card-image" src={image} alt="Weather image" />
        <h1>{condition}</h1>{" "}
      </div>
      <h1 className="card-details_temparature">
        {temparature}
        <sup>°C</sup>
      </h1>
      <h3 className="card-details_place">
        {city}, {country}
      </h3>
      <p className="card-details_description">
        The weather condition in {city}, is describe as: {description} with{" "}
        {temparature}°C of temperature and with {humidity} % of humidity.
      </p>
      <h3>
        <span className="card-details__max-temp">Max: {max}°C</span>{" "}
        &nbsp;&nbsp;
        <span className="card-min-temp">Min: {min}°C</span>
      </h3>
      <p className="card-container_wind">
        Wind: {windDirection} {windSpeed}mi/h
      </p>
    </div>
  );
};

export default card;
