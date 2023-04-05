import { useState, createContext } from "react";
import axios from 'axios';
import { forwardRef } from "react";

const WeatherContext = createContext();

// openweatherapi 07913097fbe92c98944f64bb91481719

// weatherapi 95516dd747cd48dfb9035458230604

const WeatherProvider = ({ children }) => {

  const [searchData, setSearchData] = useState({
    city: "",
    country: "",
  });

  const [resultData, setResultData] = useState({});
  const [resultForecastData, setResulForecasttData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const setData = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value,
    });
  };

  const getData = async formData =>{
    setLoading(true)
    setError(false)
    
    try {
      const { city, country } = formData;

      const apiId = "07913097fbe92c98944f64bb91481719";

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}, ${country}&appid=${apiId}`;
      
      const { data } = await axios(url);
      // console.log("data", data)
      setResultData(data)

    } catch (error) {
      setError('No results from api, insert valid data')
    }finally{
      setLoading(false)
    }
  }

  // call api with rain chance and other data arrayto chart

  const forecastData = async formData =>{
    try{
      const { city } = formData;
      const apiKey = "95516dd747cd48dfb9035458230604";
      const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=yes&alerts=yes`;

      const { data } = await axios(url);
      // console.log("data forecast", data)
      setResulForecasttData(data)

    }catch (error) {
      setError('No results from api, insert valid data')
    }
  }

  return (
    <WeatherContext.Provider  value={{
      searchData,
      setData,
      getData,
      forecastData,
      resultData,
      resultForecastData,
      loading,
      error
  }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider };

export default WeatherContext;
