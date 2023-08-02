/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";
import Form from "./components/Form";
import { api, apiKey } from "./api/api.js";

const App = () => {
  // const [country, setCountry] = useState("Yangon");
  const [data, setData] = useState({});

  const tryCatch = async (countryName) => {
    try {
      const res = await api.get(`/weather?q=${countryName}&appid=${apiKey}`);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWeather = (country_name) => {
    if (country_name !== undefined) {
      // setCountry(country_name);
      tryCatch(country_name);
    } else {
      tryCatch("Yangon");
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <>
      <div className="w-100 min-vh-100 d-flex justify-content-center align-items-center">
        <div className="shadow-lg bg-light p-3">
          <h4 className="text-secondary text-center">Weather App</h4>
          <Form fetchWeather={fetchWeather} />
          <Card data={data} />
        </div>
      </div>
    </>
  );
};

export default App;
