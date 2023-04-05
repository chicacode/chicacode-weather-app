import React from "react";
import WeatherCard from "./WeatherCard";
import Loader from "./Loader";
import useWeather from "../hooks/useWeather";

const WeatherApp = () => {
  const { resultData, resultForecastData, loading, error } = useWeather();
  // console.log("data en app", resultForecastData)
  // const { name, weather, main, coord, sys, wind } = resultData;
  const { current, forecast, location } = resultForecastData;
  return (
    <>

      <main className="flex flex-col items-center justify-center">

      {resultData?.name  && (
          <div className="flex items-center mx-auto text-center">
            <img
              src={`http://openweathermap.org/img/w/${weather[0]?.icon}.png`}
              alt="Sunset in the mountains"
              width={50}
              height={50}
            />
            <div className="">
              <h5 className="mb-2 text-2xl font-medium tracking-tight text-primary">
                {name}, {sys?.country}
              </h5>
            </div>
          </div>
        )}
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
