import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../slice/WeatherSlice";

const store = configureStore({
  reducer: weatherReducer,
});

export default store;
