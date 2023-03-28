import useWeather from "../hooks/useWeather";
import CardDetail from "./CardDetail";

const WeatherCard = () => {
  const { resultData } = useWeather();
  console.log(resultData);
  const { name, weather, main, coord, sys, wind } = resultData;
  const kelvin = 273.15;
  return (
    <div>
      <div className="max-w-lg w-72 p-6 bg-grayDarkOpacity border border-gray rounded-lg">
        <div className="flex flex-col justify-around items-center">
          <h6 className="text-grayDarkTitles text-base font-base">
            Wind speed
          </h6>
          {/* <span className="inline-block bg-gray rounded-full px-3 py-1 text-lg mr-2 mb-2">
            Temp: {parseInt(main?.temp - kelvin)} <span>&#x2103;</span>
          </span> */}

          <div className="grid grid-cols-3 gap-3 items-center">
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
                {wind.speed}{" "}
              </h4>{" "}
              <span className="text-secondary text-base">Km/h</span>
            </div>
            <div className="flex justify-between items-center">
            
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-9 h-9 ml-2"
                fill="rgb(245, 101, 101)"
                viewBox="0 0 24 24"
                stroke="rgb(245, 101, 101)"
                strokeWidth={2}
              >
                <path d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z"/>
              </svg>
              <p className="text-grayDarkTitles text-sm">2km/h</p>
            </div>
          </div>


        </div>

        {/* <CardDetail data={weather} /> */}
        {/* <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray rounded-full px-3 py-1 text-sm  mr-2 mb-2">
            Lat: {coord?.lat}
          </span>
          <span className="inline-block bg-gray rounded-full px-3 py-1 text-sm mr-2 mb-2">
            Lon: {coord?.lon}
          </span>

          <span className="inline-block bg-gray rounded-full px-3 py-1 text-sm mr-2 mb-2">
            Min: {parseInt(main?.temp_min - kelvin)} <span>&#x2103;</span>
          </span>

          <span className="inline-block bg-gray rounded-full px-3 py-1 text-sm mr-2 mb-2">
            Max: {parseInt(main?.temp_max - kelvin)} <span>&#x2103;</span>
          </span>
        </div> */}

        {/* <div className="text-center">
          <a
            href="https://github.com/chicacode/chicacode-weather-app"
            className="inline-flex items-center text-indigo hover:underline"
            target={"_blank"}
          >
            See our guideline
            <svg
              className="w-5 h-5 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
            </svg>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default WeatherCard;
