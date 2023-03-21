import React from "react";
import Form from "./Form";
import WeatherCard from "./WeatherCard";
import Loader from "./Loader";
import useWeather from "../hooks/useWeather";

const WeatherApp = () => {
  const { resultData, loading } = useWeather();
  return (
    <>
      <main className="grid grid-cols-2 items-center justify-center">
        <Form />
        {loading ? <Loader /> : resultData?.name && <WeatherCard />}
      </main>
    </>
  );
};

export default WeatherApp;
