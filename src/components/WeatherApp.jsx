import React from "react";
import Form from "./Form";
import WeatherCard from "./WeatherCard";
import Loader from "./Loader";
import useWeather from "../hooks/useWeather";

const WeatherApp = () => {
  const { resultData, loading, error } = useWeather();

  return (
    <>
      <main className="grid grid-cols-2 items-center justify-center">
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "50vh"
            }}> 
        <Form />
        {loading ? <Loader /> : resultData?.name && <WeatherCard />}
        {error && (
          <div className="flex justify-center text-center items-center container mx-auto w-86 bg-error text-light font-light">
            <span className="px-0.5">
              <i className="fa-solid fa-circle-exclamation"></i>
            </span>
            {error}
          </div>
        )}
        </div>

      </main>
    </>
  );
};

export default WeatherApp;
