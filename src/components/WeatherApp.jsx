import React from "react";
import WeatherCard from "./WeatherCard";
import Loader from "./Loader";
import useWeather from "../hooks/useWeather";

const WeatherApp = () => {
  const { resultForecastData, loading, error } = useWeather();

  return (
    <>

      <main className="flex w-full items-center justify-center">

        {loading ? <Loader /> : resultForecastData?.current && <WeatherCard />}
        {error && (
          <div className="flex justify-center text-center items-center container mx-auto w-86 bg-error text-light font-light">
            <span className="px-0.5">
              <i className="fa-solid fa-circle-exclamation"></i>
            </span>
            {error}
          </div>
        )}
      </main>
    </>
  );
};

export default WeatherApp;
