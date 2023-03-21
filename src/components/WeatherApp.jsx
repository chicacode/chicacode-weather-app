import React from "react";
import Form from "./Form";
import WeatherCard from "./WeatherCard";
import useWeather from "../hooks/useWeather";

const WeatherApp = () => {

  const { resultData } = useWeather();
  return (
    <>
      <main className="grid grid-cols-2 items-center justify-center">
        <Form />
        { resultData?.name &&  <WeatherCard />}
      </main>
    </>
  );
};

export default WeatherApp;
