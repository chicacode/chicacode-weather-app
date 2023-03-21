import { useState, createContext } from "react";
import axios from 'axios';

const WeatherContext = createContext();

// 07913097fbe92c98944f64bb91481719

const WeatherProvider = ({ children }) => {

  const [searchData, setSearchData] = useState({
    city: "",
    country: "",
  });

  const [resultData, setResultData] = useState({});

  const setData = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value,
    });
  };

  const getData = async formData =>{

    try {
      const { city, country } = formData;
      const apiId = import.meta.env.VITE_API_KEY;

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}, ${country}&appid=${apiId}`;
      
      const { data } = await axios(url);
      setResultData(data)

    } catch (error) {
      console.log(error)
    }

  }
  return (
    <WeatherContext.Provider  value={{
      searchData,
      setData,
      getData,
      resultData
  }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider };

export default WeatherContext;
