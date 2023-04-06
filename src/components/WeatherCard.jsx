import useWeather from "../hooks/useWeather";
import CardDetail from "./CardDetail";

const WeatherCard = () => {
  const { resultData, resultForecastData } = useWeather();
  // console.log(resultData);
  // const { name, weather, main, coord, sys, wind } = resultData;
  const { current, forecast, location } = resultForecastData;

  // console.log("data card", resultForecastData)
  const kelvin = 273.15;
  return (
    <div>
       <CardDetail data={location} />
      <div className="grid grid-cols-2 gap-4">
        <div className="max-w-lg w-80 p-4 bg-grayDarkOpacity border border-gray rounded-lg">
          <div className="flex flex-col justify-around items-center">
            <h6 className="text-grayDarkTitles text-base font-base">
              Wind Speed
            </h6>
            {/* <span className="inline-block bg-gray rounded-full px-3 py-1 text-lg mr-2 mb-2">
            Temp: {parseInt(main?.temp - kelvin)} <span>&#x2103;</span>
          </span> */}

            <div className="grid grid-cols-3 gap-1 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-9 h-9"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path d="M11 10h-11v-2h11c.552 0 1-.448 1-1s-.448-1-1-1c-.403 0-.747.242-.905.587l-1.749-.956c.499-.965 1.494-1.631 2.654-1.631 3.971 0 3.969 6 0 6zm7 7c0-1.656-1.344-3-3-3h-15v2h15c.552 0 1 .448 1 1s-.448 1-1 1c-.403 0-.747-.242-.905-.587l-1.749.956c.499.965 1.494 1.631 2.654 1.631 1.656 0 3-1.344 3-3zm1.014-7.655c.082-.753.712-1.345 1.486-1.345.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5h-20.5v2h20.5c1.932 0 3.5-1.568 3.5-3.5s-1.568-3.5-3.5-3.5c-1.624 0-2.977 1.116-3.372 2.617l1.886.728z" />
                </svg>
              </div>
              <div className="flex justify-center items-center mx-2">
                <h4 className="text-secondary text-4xl font-bold">
                  {current?.wind_kph}{" "}
                </h4>{" "}
                <span className="text-secondary text-2xl font-bold">Km/h</span>
              </div>
              <div className="flex justify-end items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-9 h-9 ml-2"
                  fill="rgb(245, 101, 101)"
                  viewBox="0 0 24 24"
                  stroke="rgb(245, 101, 101)"
                  strokeWidth={2}
                >
                  <path d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z" />
                </svg>
                <p className="text-grayDarkTitles text-sm">2km/h</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-lg w-80 p-4 bg-grayDarkOpacity border border-gray rounded-lg">
          <div className="flex flex-col justify-around items-center">
            <h6 className="text-grayDarkTitles text-base font-base">
              Rain Chance
            </h6>

            <div className="grid grid-cols-3 gap-1 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-9 h-9"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path d="M20.422 8.516c-.178-3.233-3.031-5.778-6.432-5.492-1.087-1.239-2.693-2.024-4.49-2.024-3.172 0-5.754 2.443-5.922 5.516-2.033.359-3.578 2.105-3.578 4.206 0 2.362 1.949 4.278 4.354 4.278h1.326c.771 1.198 2.124 2 3.674 2h10.291c2.406 0 4.355-1.916 4.355-4.278 0-2.101-1.545-3.847-3.578-4.206zm-15.395 4.484h-.673c-1.297 0-2.354-1.022-2.354-2.278 0-2.118 2.104-2.597 3.488-2.512-.05-1.356.137-5.21 4.012-5.21.967 0 1.714.25 2.29.644-1.823.922-3.096 2.746-3.212 4.872-2.022.358-3.697 2.127-3.551 4.484zm14.618 2h-10.291c-1.297 0-2.354-1.022-2.354-2.278 0-2.118 2.104-2.597 3.488-2.512-.05-1.356.137-5.21 4.012-5.21 3.771 0 4.229 3.771 4.012 5.209 1.509-.105 3.488.437 3.488 2.513 0 1.256-1.057 2.278-2.355 2.278zm-14.063 8l-1.41-1.41 3.59-3.59 1.41 1.41-3.59 3.59zm8.543-3.59l-1.41-1.41-3.59 3.59 1.41 1.41 3.59-3.59zm4.875 0l-1.41-1.41-3.59 3.59 1.41 1.41 3.59-3.59z" />
                </svg>
              </div>
              <div className="flex justify-center items-center mx-2">
                <h4 className="text-secondary text-4xl font-bold">
                  {forecast?.forecastday[0].day?.daily_chance_of_rain}{" "}
                </h4>{" "}
                <span className="text-secondary text-2xl font-bold">-</span>
              </div>
              <div className="flex justify-end items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-9 h-9 ml-2"
                  fill="rgb(245, 101, 101)"
                  viewBox="0 0 24 24"
                  stroke="rgb(245, 101, 101)"
                  strokeWidth={2}
                >
                  <path d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z" />
                </svg>
                <p className="text-grayDarkTitles text-sm">2km/h</p>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      <div className="grid grid-cols-2 gap-4 mt-2">
        <div className="max-w-lg w-80 p-4 bg-grayDarkOpacity border border-gray rounded-lg">
          <div className="flex flex-col justify-around items-center">
            <h6 className="text-grayDarkTitles text-base font-base">
             Pressure
            </h6>
  
            <div className="grid grid-cols-3 gap-1 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-9 h-9"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path d="M11 10h-11v-2h11c.552 0 1-.448 1-1s-.448-1-1-1c-.403 0-.747.242-.905.587l-1.749-.956c.499-.965 1.494-1.631 2.654-1.631 3.971 0 3.969 6 0 6zm7 7c0-1.656-1.344-3-3-3h-15v2h15c.552 0 1 .448 1 1s-.448 1-1 1c-.403 0-.747-.242-.905-.587l-1.749.956c.499.965 1.494 1.631 2.654 1.631 1.656 0 3-1.344 3-3zm1.014-7.655c.082-.753.712-1.345 1.486-1.345.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5h-20.5v2h20.5c1.932 0 3.5-1.568 3.5-3.5s-1.568-3.5-3.5-3.5c-1.624 0-2.977 1.116-3.372 2.617l1.886.728z" />
                </svg>
              </div>
              <div className="flex justify-center items-center mx-2">
                <h4 className="text-secondary text-4xl font-bold">
                  {current?.pressure_in}{" "}
                </h4>{" "}
                <span className="text-secondary text-2xl font-bold">Km/h</span>
              </div>
              <div className="flex justify-end items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-9 h-9 ml-2"
                  fill="rgb(245, 101, 101)"
                  viewBox="0 0 24 24"
                  stroke="rgb(245, 101, 101)"
                  strokeWidth={2}
                >
                  <path d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z" />
                </svg>
                <p className="text-grayDarkTitles text-sm">2km/h</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-lg w-80 p-4 bg-grayDarkOpacity border border-gray rounded-lg">
          <div className="flex flex-col justify-around items-center">
            <h6 className="text-grayDarkTitles text-base font-base">
              UV Index
            </h6>
            <div className="grid grid-cols-3 gap-1 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-9 h-9"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path d="M20.422 8.516c-.178-3.233-3.031-5.778-6.432-5.492-1.087-1.239-2.693-2.024-4.49-2.024-3.172 0-5.754 2.443-5.922 5.516-2.033.359-3.578 2.105-3.578 4.206 0 2.362 1.949 4.278 4.354 4.278h1.326c.771 1.198 2.124 2 3.674 2h10.291c2.406 0 4.355-1.916 4.355-4.278 0-2.101-1.545-3.847-3.578-4.206zm-15.395 4.484h-.673c-1.297 0-2.354-1.022-2.354-2.278 0-2.118 2.104-2.597 3.488-2.512-.05-1.356.137-5.21 4.012-5.21.967 0 1.714.25 2.29.644-1.823.922-3.096 2.746-3.212 4.872-2.022.358-3.697 2.127-3.551 4.484zm14.618 2h-10.291c-1.297 0-2.354-1.022-2.354-2.278 0-2.118 2.104-2.597 3.488-2.512-.05-1.356.137-5.21 4.012-5.21 3.771 0 4.229 3.771 4.012 5.209 1.509-.105 3.488.437 3.488 2.513 0 1.256-1.057 2.278-2.355 2.278zm-14.063 8l-1.41-1.41 3.59-3.59 1.41 1.41-3.59 3.59zm8.543-3.59l-1.41-1.41-3.59 3.59 1.41 1.41 3.59-3.59zm4.875 0l-1.41-1.41-3.59 3.59 1.41 1.41 3.59-3.59z" />
                </svg>
              </div>
              <div className="flex justify-center items-center mx-2">
                <h4 className="text-secondary text-4xl font-bold">
                  {current?.uv}{" "}
                </h4>{" "}
                <span className="text-secondary text-2xl font-bold">-</span>
              </div>
              <div className="flex justify-end items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-9 h-9 ml-2"
                  fill="rgb(245, 101, 101)"
                  viewBox="0 0 24 24"
                  stroke="rgb(245, 101, 101)"
                  strokeWidth={2}
                >
                  <path d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z" />
                </svg>
                <p className="text-grayDarkTitles text-sm">2km/h</p>
              </div>
            </div>
          </div>
        </div>
        {/* <CardDetail data={weather} /> */}
      </div>
    </div>
  );
};

export default WeatherCard;
