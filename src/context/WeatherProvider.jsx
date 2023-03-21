import { useState, createContext } from "react";

const WeatherContext = createContext();

// 07913097fbe92c98944f64bb91481719

const WeatherProvider = ({ children }) => {
  const [searchData, setSearchData] = useState({
    city: "",
    country: "",
  });

  const getData = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <WeatherContext.Provider value={{ searchData, getData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider };

export default WeatherContext;
