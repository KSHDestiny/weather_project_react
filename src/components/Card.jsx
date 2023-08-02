/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

const Card = ({ data }) => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (JSON.stringify(data) !== "{}") {
    return (
      <div className="d-flex flex-column align-items-center gap-2">
        <p className="mt-3">
          <Clock value={value} />
        </p>
        <h3>
          {data.name}, {data.sys.country}
        </h3>
        <h1>
          <img
            src={`https://api.openweathermap.org/img/w/${data.weather[0].icon}.png`}
          />
          {/* (32°F − 32) × 5/9 */}
          {data.main.temp}°C
        </h1>
        <p>{data.weather[0].main}</p>
        <p>Humidity: {data.main.humidity} %</p>
        <p>Visibility: {data.visibility / 1000} km</p>
      </div>
    );
  } else {
    return <h1 className="text-center py-5">Loading...</h1>;
  }
};

export default Card;
