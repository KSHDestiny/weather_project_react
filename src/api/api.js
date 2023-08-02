import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

export const apiKey = "a1e4eeba780368cd9993d7030da3dbaa";
